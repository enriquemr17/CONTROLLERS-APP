# Games API

API REST para la gestión de videojuegos. Permite crear, leer, actualizar y eliminar juegos.

---

# Base URL
http://localhost:3001/api/games

---

# Endpoints

---

## GET - Obtener todos los juegos

### Request
GET /api/games

### Response
```json
[
  {
    "id": 1,
    "title": "Zelda",
    "platform": "Switch",
    "status": "playing",
    "portada": "https://...",
    "horasJugadas": 10
  }
]

Status codes: 200 OK

## GET - OBTENER JUEGOS POR ID

### Request
GET /api/games/:id

### Response
{
  "id": 1,
  "title": "Zelda",
  "platform": "Switch",
  "status": "playing",
  "portada": "https://...",
  "horasJugadas": 10
}

Status codes: 
200 OK
404 Not Found

## POST - CREAR JUEGO

### Request
POST /api/games

## Body 
{
  "title": "Elden Ring",
  "platform": "PS5",
  "status": "playing",
  "portada": "https://image.url",
  "horasJugadas": 5
}

### Response
{
  "id": 1710000000000,
  "title": "Elden Ring",
  "platform": "PS5",
  "status": "playing",
  "portada": "https://image.url",
  "horasJugadas": 5
}

Status codes: 
201 Created
400 Bad Request

## PUT- ACTUALIZAR JUEGO COMPLETO 

## Request
PUT /api/games/:id

### Body 
{
  "title": "Zelda Updated",
  "platform": "Switch",
  "status": "completed",
  "portada": "https://image.url",
  "horasJugadas": 20
}

### Response 
{
  "id": 1,
  "title": "Zelda Updated",
  "platform": "Switch",
  "status": "completed",
  "portada": "https://image.url",
  "horasJugadas": 20
}

Status codes: 
200 OK
404 Not Found

## PATCH - ACTUALIZACION PARCIAL 

### Request 
PATCH /api/games/:id

## BODY
{
  "status": "completed"
}

### Response
{
  "id": 1,
  "title": "Zelda",
  "platform": "Switch",
  "status": "completed"
}

Status Codes: 
200 OK
404 Not Found

## DELETE . ELIMINAR JUEGO 

### Request
DELETE /api/games/:id

### RESPONSE
{
  "message": "Juego eliminado"
}

Status codes: 
200 OK
404 Not Found
