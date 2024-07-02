# Cartas Giratorias

## Descripción

Este es un juego de memoria basado en un tablero de cartas, donde el jugador debe encontrar las parejas de cartas iguales. El juego tiene un límite de 30 intentos para encontrar todas las parejas, y se introducen cambios visuales en el tablero a medida que el jugador realiza más intentos.

## Características

- Inicio del Juego: El juego comienza con una pantalla de inicio y una breve explicación del objetivo.
- Intentos y Energía: El jugador tiene un total de 30 intentos para encontrar todas las parejas. Cada par de cartas giradas cuenta como un intento.
- Cambios Visuales: A medida que se realizan más intentos, el fondo del juego cambia para aumentar la dificultad visual.
- Victoria y Derrota: El juego notifica al jugador cuando ha ganado (encontrado todas las parejas) o ha perdido (agotado los 30 intentos).

## Tecnologías Utilizadas

- HTML: Estructura del documento.
- CSS: Estilos y diseño visual.
- JavaScript: Lógica del juego y manipulación del DOM.

## Estructura del Proyecto

- index.html: Contiene la estructura básica del juego.
- styles.css: Contiene los estilos CSS para el juego.
- index.js: Contiene la lógica del juego en JavaScript.
- Imagenes: Carpeta que contiene las imágenes utilizadas en el juego.

## Lógica del Juego

### Funciones Principales

- activacion(cartita): Controla la lógica cuando se hace clic en una carta. Verifica si la carta seleccionada puede ser activada, actualiza los intentos y movimientos, y maneja la lógica de coincidencia de cartas.
- victoria(): Verifica si todas las cartas han sido encontradas y muestra un mensaje de victoria.
- reiniciar(): Reinicia el estado de las cartas no coincidentes.
- cambio_carta_10(): Cambia el diseño de las cartas cuando los intentos superan los 10.
- cambio_carta_15(): Cambia el diseño de las cartas cuando los intentos superan los 20.
- valoraleatorio(): Genera valores aleatorios para las cartas y asegura que cada pareja de cartas tenga el mismo valor.
- inicio(): Inicia el juego, ocultando la pantalla de inicio y mostrando el tablero de juego.

### Eventos y Listeners

1. Las cartas se generan dinámicamente y se les asigna un event listener para manejar la activación.
2. El botón de inicio tiene un onclick que llama a la función inicio().

### Flujo del Juego

1. El jugador hace clic en el botón de inicio.
2. Se muestra el tablero de juego con las cartas.
3. El jugador selecciona cartas tratando de encontrar parejas.
4. Los intentos se incrementan y se actualizan visualmente.
5. Si el jugador encuentra todas las parejas antes de los 30 intentos, gana.
6. Si el jugador agota los 30 intentos sin encontrar todas las parejas, pierde.

## Estilos CSS

- Fuentes: Se utilizan las fuentes Nabla y Honk para los textos del juego.
- Clases Dinámicas: Las clases intentos-5, intentos-10, intentos-15, y game-over se añaden o eliminan dinámicamente para cambiar el estilo del juego basado en los intentos del jugador.

## Créditos
Idea original del juego inspirada en este video: https://www.youtube.com/watch?v=c0eigGnotm0.

## Clonar el juego y visitarlo

Para clonar el juego, puedes utilizar el siguiente comando en la terminal: git clone git@github.com:Perales33/Cartas-Giratorias.git

Para visitar el juego: https://github.com/Perales33/Cartas-Giratorias.git