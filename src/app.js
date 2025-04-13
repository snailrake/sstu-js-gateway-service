const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(express.json());

const serviceRoutes = {
    '/unitservice': process.env.UNIT_SERVICE_URL,
    '/fileservice': process.env.FILE_SERVICE_URL,
    '/logservice': process.env.LOG_SERVICE_URL
};

Object.entries(serviceRoutes).forEach(([path, target]) => {
    app.use(path, createProxyMiddleware({
        target,
        changeOrigin: true
    }));
});

app.use((err, req, res, next) => {
    console.error('Gateway Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
