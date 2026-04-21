# Diseño y arquitectura del proyecto

## Tecnologías principales

- **Frontend**: React + TypeScript + Vite
- **Estilos**: Tailwind CSS
- **Enrutado**: React Router
- **Backend**: Node.js + Express
- **Base de datos**: MongoDB
- **Autenticación**: Firebase Auth
- **Almacenamiento de avatares**: Firebase Storage
- **API externa**: RAWG (catálogo de videojuegos)

---

## Arquitectura general

React (frontend)
↕
Express (server/)
├── Verifica token de Firebase Auth
├── Habla con MongoDB
└── Habla con RAWG como intermediario
↕
MongoDB → colección de juegos y perfil de usuario
Firebase Auth → login y registro
Firebase Storage → avatares
RAWG → información de juegos (solo lectura)

---

## Páginas

- **HomePage** — explorador general de juegos usando RAWG, con buscador y filtros por plataforma
- **CollectionPage** — colección personal del usuario, filtros por estado, barra de progreso por consola
- **GameDetailPage** — detalle completo de un juego: descripción, imágenes, plataformas, rating
- **ProfilePage** — perfil editable del usuario con estadísticas de su colección

---

## Componentes reutilizables

- `GameCard` — tarjeta de un juego con imagen, título y estado
- `StatusBadge` — badge de color según estado (jugando, completado, pendiente...)
- `FilterBar` — barra de filtros por estado o plataforma
- `Navbar` — navegación principal
- `SearchBar` — input de búsqueda integrado en Home y Collection

---

## Gestión del estado

### Estado global (Context API)
- `AuthContext` — sesión del usuario, token de Firebase
- `CollectionContext` — colección de juegos del usuario

### Estado local (useState)
- Filtros activos en cada página
- Texto del buscador
- Modales abiertos o cerrados
- Estados de carga y error

---

## Estructura de datos en MongoDB

### Colección `users`
```json
{
  "_id": "uid_de_firebase",
  "nombre": "Enrique",
  "bio": "...",
  "consolas": ["PS4", "PC", "Switch"],
  "juegoFavorito": "The Last of Us",
  "avatarUrl": "url_de_firebase_storage"
}
```

### Colección `games` (subcolección por usuario)
```json
{
  "_id": "ObjectId",
  "userId": "uid_de_firebase",
  "rawgId": 123456,
  "titulo": "God of War",
  "plataforma": "PS4",
  "estado": "completado",
  "portada": "url_de_imagen",
  "horasJugadas": 40,
  "fechaAñadido": "2026-04-20T00:00:00Z"
}
```

---

## Endpoints REST

### Usuarios
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/users/:id` | Obtener perfil |
| PUT | `/api/v1/users/:id` | Editar perfil |

### Colección de juegos
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/users/:id/games` | Obtener colección completa |
| POST | `/api/v1/users/:id/games` | Añadir un juego |
| PATCH | `/api/v1/users/:id/games/:gameId` | Actualizar estado u horas |
| DELETE | `/api/v1/users/:id/games/:gameId` | Eliminar un juego |

### Juegos (RAWG como intermediario)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/games/search?q=nombre-juego` | Buscar juegos |
| GET | `/api/v1/games/:rawgId` | Detalle de un juego |

---

## Persistencia de datos

### En el servidor (MongoDB)
- Perfil del usuario
- Colección de juegos del usuario

### En Firebase
- Credenciales de login (Firebase Auth)
- Avatar del usuario (Firebase Storage)

### Solo en el cliente (nunca se guardan)
- Resultados de búsqueda de RAWG
- Filtros activos
- Texto del buscador
- Estado de modales
- Estados de carga y error

---

## Flujo de datos

1. El usuario busca un juego → React consulta RAWG a través del backend
2. El usuario añade un juego → React envía POST al backend → Express guarda en MongoDB
3. El usuario abre su colección → React pide GET al backend → Express lee MongoDB
4. El usuario hace login → Firebase Auth devuelve un token → React lo guarda en AuthContext
5. Cada petición al backend incluye el token de Firebase para verificar identidad