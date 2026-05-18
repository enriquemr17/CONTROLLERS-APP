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