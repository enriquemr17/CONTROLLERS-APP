# GameForm

## Funcionamiento
El usuario introduce el título del videojuego, la plataforma y el estado en el que desea guardarlo.  
Estos datos se almacenan en el estado del formulario usando `useState` y se actualizan en tiempo real mediante `handleChange`.

Al enviar el formulario, se ejecuta `handleSubmit`, que valida los datos y, si son correctos, añade el juego a la colección global.

---

## Validación
Se utiliza `useState` para gestionar un mensaje (`message`) que muestra feedback al usuario.

Se comprueba si los campos "title" y "platform" están vacíos.  
Si falta alguno, se muestra un mensaje de error indicando que deben rellenarse todos los campos.

Si los datos son correctos, el juego se añade a la colección mediante el contexto (`añadir`) y se muestra un mensaje de éxito.

---

## Flujo
Usuario → escribe datos → onChange actualiza estado → submit → validación → añadir juego → mensaje de confirmación o error