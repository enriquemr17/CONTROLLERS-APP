### CONTEXT API
    Context API es una herramienta de React que permite compartir datos entre componentes sin tener que pasar props de padre a hijo manualmente. Es útil cuando muchos componentes necesitan acceder a los mismos datos.

Cuándo usarlo:
    cuando tienes datos que necesitan muchos componentes a la vez y para evitar "prop drilling" (pasar props por varios niveles de componentes)

## AuthContext
    La utilizamos para que el backend y la API sepan los login y logout de la app. 

## CollectionContext
    Sirve para llevar el control de la colección usando la API para actualizar los estados de los juegos, añadir y eliminar los mismos, usando tambieén el backend. 