### CAPA DE RED

## BackendApi: 
    Sirve para conectar la API con el backend, consiguiendo asi todos los juegos necesarios en cada momento. Gracias a los imports de Game y CreateGameInput y el uso de los metodos POST, PUT, DELETE, conseguimos comunicarnos con la base de datos, recibiendo asi la infomración necesaria. Cada función tiene su mensaje de error en caso de que no pudiese realizarse la accion específica, como borrar un juego, actualizarlo, añadirlo... 

## GamesApi: 
    La función es la misma que BackendApi, solo que añadiendo la función de buscar y recibir todos los juegos relacionados con la búsqueda con GetBackendGames.


### FUNCIONES DISPONIBLES

GetBackendGames -> 
    1. Encuentra todos los juegos y muestra el resultado en pantalla.
    
AddGame -> 
    1. Añade juegos a la lista de colección. 
    2. Recibe una llamada del backend con el método POST y devuelve el juego añadido a la lista de colección. 

UpdateGame -> 
    1. Actualiza el estado y las horas jugadas de cada juego. 
    2. Recibe una llamada del backend con el método PUT y devuelve los juegos actualizados. 

DeleteGame -> 
    1. Elimina los juegos de la lista de colección.
    2. Recibe una llamada del backend con el método DELETE y devuleve un mensaje con el juego eliminado. 

### TIPOS UTILIZADOS 
    Para poder tipar todas las funciones hemos utilizado difrentes tipos, como Game, GameStatus y CreateGameInput. 

    1. Game: sirve para conocer todos los datos de cada juego y los que queremos utilizar en cada momento. 

    2. GameStatus: sirve para conocer cual es el estado del videojuego, como (jugando, abandonado, lista de deseos, pendiente...)

    3. CreateGameInput: sirve para controlar la entrada la entrada de los videojuegos al buscar en la pantalla principal. 

### GESTIÓN DE ESTADOS DE RED
En CollectionPage gestionamos tres estados posibles cuando llamamos al backend:
- **Cargando**: mientras esperamos la respuesta del servidor mostramos un mensaje "Cargando..."
- **Error**: si la petición falla mostramos el mensaje de error correspondiente
- **Éxito**: cuando los datos llegan correctamente los mostramos en pantalla

### FUENTE DE VERDAD
Los datos de la colección de juegos viven en el backend (Express), no en LocalStorage. 
Cada vez que el usuario añade, edita o elimina un juego, se hace una petición al servidor 
y se refresca la lista desde la API, asegurando que los datos siempre están actualizados.
