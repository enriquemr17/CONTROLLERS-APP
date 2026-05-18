### DEFINICION DE RUTAS

Router.get -> Recogemos todos los juegos creados tanto con id como sin ella y llamamos a la API.

Router.post -> Al seleccionar un juego y darle a añadir, guardamos el juego en nuestra coleccion de juegos. 

Router.put -> Actualizamos la información del videojuego, por ahora, con el estado del videojuego (completado, pendiente, lista de deseos...) y las horas jugadas al mismo. 

Router.delete -> Eliminamos un juego de nuestra colección. 


## Rutas del frontend

| Ruta | Página | Descripción |
|------|--------|-------------|
| / | HomePage | Página principal |
| /coleccion | CollectionPage | Colección personal |
| /perfil | ProfilePage | Perfil del usuario |
| /juego/:id | GameDetailPage | Detalle de un juego |
| * | NotFoundPage | Página 404 |