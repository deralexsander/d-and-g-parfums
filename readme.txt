D & G PARFUMS — EJECUCION LOCAL
==================================
Votre essence, votre style

Historia y Contexto del Proyecto
--------------------------------
Este proyecto nace a raiz del exito y la excelente recepcion del catalogo digital
desarrollado previamente para Notes & Sillage. Tras comprobar su agilidad,
elegancia visual y facilidad para consultar fragancias en tiempo real desde el
celular, la direccion de D & G Parfums solicito una adaptacion exclusiva con su
propia identidad visual, colores corporativos y logotipo.

Disenado como un catalogo interactivo de consulta inmediata para clientes,
prescinde de carritos de compra y pasarelas complejas para ofrecer una experiencia
100% centrada en la visualizacion de aromas, notas olfativas y precios claros en
formato destacado.

Requisitos
----------
- Un navegador web moderno (Google Chrome, Safari, Firefox, Edge).
- Python 3 para iniciar un servidor local de desarrollo.

Este proyecto es un sitio 100% estatico desarrollado con HTML5 semantico, CSS3 y
JavaScript ES6+. No requiere dependencias de Node.js, compilacion ni conexion
a servicios backend externos.

Ejecucion recomendada: servidor local con Python
-------------------------------------------------
1. Abre una terminal.
2. Entra a la carpeta del proyecto:

   cd /Users/alexsander/Desktop/proyectos/d-and-g-parfums

3. Inicia el servidor local:

   python3 -m http.server 8000

4. Abre en tu navegador web:

   http://localhost:8000

   O bien ejecuta directamente en macOS:
   open http://localhost:8000

5. Para detener el servidor, presiona Ctrl + C en la terminal.

Visualizacion en Visual Studio Code
-----------------------------------
1. Abre la carpeta d-and-g-parfums en VS Code.
2. Con el servidor de Python activo, presiona Cmd + Shift + P.
3. Escribe "Simple Browser: Show" e ingresa http://localhost:8000.
4. Alternativamente, puedes usar la extension "Live Server" y abrir index.html.

Estructura de archivos principales
----------------------------------
- index.html: estructura semantica y contenedor del catalogo.
- css/estilos.css: estilos responsive, tipografias y paleta luxury de la marca.
- js/base-datos.js: base de datos local en JavaScript con fragancias, notas y precios.
- js/app.js: logica interactiva de busqueda, mapa olfativo y visualizacion de aromas.
- img/: fotografias de producto, empaques e inspiraciones olfativas.
- docs/: capturas y documentacion del proyecto.
