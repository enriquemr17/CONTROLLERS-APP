### QUE ES UN HOOK Y DIFERENTES USOS EN EL PROYECTO

Un HOOK es una función de React que permite añadir funcionalidades a los componentes como guardar datos, ejecutar código en momentos concretos u optimizar el rendimiento, siempre con el uso de "use"


useState -> guarda un valor y lo re-renderiza cuando cambia.

useEffect -> ejecuta código cuando algo cambia o cuando un componente aparece o desaparece. Por ejemplo cuando se carga una API al cargar una página. 

useMemo -> guarda el resultado de un cálculo para no repetirlo si los datos no ha cambiado.

useCallback -> guarda una función para no recrearla en cada render.

### HOOKS CREADOS EN EL PROYECTO
    ## useGames
Llama a la API de RAWG al cargar la página y devuelve los juegos, el estasdo de carga y el error si lo hay.

    ## useEstadisticas 
Comprueba el estado de cada juego que tengamos en la colección y va sumando cada uno en el array correspondiente para luego mostrarlo en pantalla. 

    ## useBusqueda
Conseguimos reutilizar la fumción en vez de hacer que se recree en la memoria cuando el componente se re-renderiza. En este caso la usamos para la seachBar. 