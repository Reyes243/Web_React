# MTG Life Counter

Aplicación web sencilla desarrollada con **React + Vite** para llevar el conteo de vidas de dos jugadores en partidas de **Magic: The Gathering**.

## Descripción

MTG Life Counter permite llevar un control sencillo de los puntos de vida de dos jugadores durante una partida.

La aplicación fue desarrollada como un ejercicio básico de React, utilizando `useState` para manejar el estado de las vidas.

## Tecnologías utilizadas

* React
* Vite
* JavaScript
* CSS
* Node.js
* npm

## Funcionalidades

* Dos jugadores.
* Ambos jugadores comienzan con **20 puntos de vida**.
* Cada jugador cuenta con dos botones:

  * `+1` para aumentar su vida.
  * `-1` para disminuir su vida.
* Botón general **"Reiniciar vidas"**.
* Confirmación antes de reiniciar las vidas.
* Al confirmar el reinicio, ambos jugadores vuelven a **20 puntos de vida**.
* Si se cancela la confirmación, las vidas permanecen sin cambios.
* Cada jugador tiene su propio estado independiente.
* Interfaz sencilla y adaptable a diferentes tamaños de pantalla.

## Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone URL_DEL_REPOSITORIO
cd mtg-life-counter
```

Instala las dependencias:

```bash
npm install
```

## Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Después abre en el navegador la dirección que proporciona Vite, normalmente:

```text
http://localhost:5173
```

