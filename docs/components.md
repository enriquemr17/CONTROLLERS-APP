# COMPONENTES REUTULIZABLES

## TECNOLOGIAS UTILIZADAS 

React, TypeScript y Tailwind CSS

1. FILTERBAR

    Este componente reutilizable consiste en tener una barra  que nos permita filtrar por el estado del videojuego. 

    Va a ser utilizado en la página de colección propia y en la página principal o Home, para así poder filtrar los juegos de la manera que el cliente quiera, tanto para la cantidad de horas jugadas, por ejemplo, o en el caso de hacerlo en la pantalla Home, para que el cliente vea que juegos le pueden interesar.

    Los props utilizados son: 
        Value: controla el estado del          videojuego, puediendo ser null, haciendo que salgan todos los estados.

        onChange: permite cambiar de valor entre unos y otros.   

2. GAMECARD
    El gamecard es el estilo o el conjunto de datos sobre un videojuego que van a aparecer en la pantalla del cliente en cualquiera de las pantllas mencionadas en design.md. 
    
    La interfaz de la "carta" contiene un id, plataforma/s en las que está disponible el videojuego, el estado en el que se encuentra en ese momento, el título, una portada y las horas jugadas. Todo esto lo conseguimos gracias al uso de  "API RAWG", que nos brinda una gran cantidad de datos de todos los videojuegos y le podremos dar un buen uso en esta aplicación.

    Los props utilizados son: 
         readonly id: string; 
         titulo: string; 
         plataforma: string; 
         estado: Estado; 
         portada: string; 
         horasJugadas: number; 

3. NAVBAR
    El NavBar consiste en la propia navegación por pantalla de la aplicación. Con ella, y gracias a React Router, podremos usar Link para linkear como su propio nombre indica, las diferentes pantallas y poder acceder a ellas. 

4. SearchBar
    SearchBar consiste en una simple barra de búsqueda. Es muy útil para poder buscar titulos de videojuegos en cualquiera de las pantallas, principalmente en nuestra colección y en el Home. Funciona con Strings y con un onChange que hace que por cada cambio de letra esté siempre buscando algo. 

5. StatusBadge
    StatusBadge consigue controlar los estados de los videojuegos dependiendo de cada cliente. En cada GAMECARD aparecerá un estado u otro, ya que un cliente puede tener un juego abandonado y otro cliente estar jugándolo o tenerlo en la lista de deseos. 

    Gracias al control de estos estados, cada uno de ellos tiene un mensaje diferente para que el cliente tenga la sensación no solo de estar guardando sus juegos "en la nube" sino que también tenga interacción con ella. 

    Los props utilzados son: 
        Estado: el estado del juego (pendiente, jugando, completado, abandonado, whislist)
