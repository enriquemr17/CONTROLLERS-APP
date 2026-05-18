# Idea del Proyecto

## Nombre provisional
Controllers

El nombre hace referencia tanto a los mandos (controles) de las consolas como al concepto de “controlar” y organizar una colección de videojuegos. Representa la idea de tener el control total sobre la biblioteca personal de juegos.
## Descripción general

Controllers es una aplicación web orientada a la gestión personal de videojuegos. Permite a los usuarios registrar los juegos que poseen, los que están jugando actualmente y aquellos que desean adquirir en el futuro.

La aplicación busca ofrecer una forma organizada y visual de llevar el control del progreso y estado de cada juego dentro de la colección personal del usuario.

---

## Problema que intenta resolver

Muchos jugadores acumulan videojuegos en distintas plataformas (PC, consola, digital, físico) y no cuentan con una herramienta sencilla para gestionar:

- Qué juegos ya tienen
- Cuáles han completado
- Qué títulos tienen pendientes
- Qué juegos desean comprar
- Cuántas horas han invertido

Normalmente esta información se dispersa entre plataformas, tiendas digitales o simplemente se deja sin organizar.  
GameTrack centraliza toda esta información en un único lugar accesible desde el navegador.

---

## Usuario objetivo

La aplicación está dirigida a:

- Jugadores habituales de videojuegos
- Personas con bibliotecas digitales grandes (Steam, PlayStation, Xbox, etc.)
- Usuarios que quieran organizar su backlog (juegos pendientes)
- Aficionados que deseen hacer seguimiento de su progreso

Está pensada para uso personal, no empresarial.

---

## Funcionalidades principales

- Buscar videojuegos mediante una API externa
- Añadir videojuegos a la colección personal
- Clasificar cada juego según su estado:
  - Pendiente
  - Jugando
  - Completado
  - Abandonado
  - Wishlist (Deseado)
- Guardar la colección usando LocalStorage
- Visualizar todos los juegos añadidos
- Eliminar juegos de la colección
- Filtrar por estado

---

## Funcionalidades opcionales

- Puntuar videojuegos
- Registrar horas jugadas
- Filtrar por plataforma
- Filtrar por género
- Buscador interno dentro de la colección
- Modo oscuro
- Vista en formato tarjeta con imagen del juego
- Estadísticas básicas (total de juegos, porcentaje completado)

---

## Posibles mejoras futuras

- Sistema de registro e inicio de sesión
- Base de datos en lugar de LocalStorage
- Sincronización en la nube
- Integración con múltiples APIs
- Gráficos avanzados de progreso
- Exportar colección en formato JSON o CSV
- Aplicación móvil

---

## Tecnologías previstas

- HTML
- CSS
- JavaScript
- LocalStorage para almacenamiento local
- Consumo de una API externa de videojuegos