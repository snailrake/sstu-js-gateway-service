
# Gateway Service

### Описание:
Данный сервис предназначен для проксирования запросов на другие микросервисы:
- unit-service
- file-service
- log-service

## Доступные пути:

| Путь | Назначение | Проксируется в |
|------|-------------|----------------|
| /unitservice | unit-service | http://localhost:3000 |
| /fileservice | file-service | http://localhost:3001 |
| /logservice | log-service | http://localhost:3003 |

## Примеры curl для Gateway:

### Получить все units:
curl -X GET http://localhost:3002/unitservice/unit

### Получить unit по id:
curl -X GET http://localhost:3002/unitservice/unit/1

### Создать unit:
curl -X POST http://localhost:3002/unitservice/unit \
-H "Content-Type: application/json" \
-d '{"name": "Example Name", "image_name": "image.png"}'

### Обновить unit:
curl -X PUT http://localhost:3002/unitservice/unit/1 \
-H "Content-Type: application/json" \
-d '{"name": "Updated Name", "image_name": "newimage.png"}'

### Удалить unit:
curl -X DELETE http://localhost:3002/unitservice/unit/1

### Загрузить файл:
curl -X POST http://localhost:3002/fileservice/file/upload \
-F "file=@test.png"

### Получить файл:
curl -X GET http://localhost:3002/fileservice/file/test.png

### Удалить файл:
curl -X DELETE http://localhost:3002/fileservice/file/test.png

### Отправить лог вручную:
curl -X POST http://localhost:3002/logservice/log \
-H "Content-Type: application/json" \
-d '{"method":"GET","url":"/file/upload","startTime":"2025-04-13T10:00:00.000Z","endTime":"2025-04-13T10:00:01.000Z","status":200}'

## Запуск сервиса:

npm install
npm start

Порт по умолчанию: 3002
