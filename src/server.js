require('dotenv').config({ path: '../.env' });
const app = require('./app');

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
});
