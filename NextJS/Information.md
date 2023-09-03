# Comandos generales

## Requisitos 
nodejs, npm, yarn

## Iniciar el proyecto
1. npx create-next-app@latest: inicia la app
2. se configura el proyecto siguiendo las instrucciones
3. npm run: sólo para comprobar los scripts que tenemos en la carpeta
4. npm run dev: corre el proyecto y usa el puerto 3000 por defecto

## Configurar ESlint
1. npm install standard -D: instala el paquete con las reglas preestablecidas

## Crear las rutas
1. Crear un archivo con el nombre "page.jsx" (será el home)
2. Para crear una ruta "/about":
    1. Crear un directorio llamado "about"
    2. Dentro del directorio crear un archivo "page.jsx" (IMPORTANTE: es necesario para cualquier carpeta con rutas)

## Crear componentes
1. Dentro de la carpeta "App" (se puede crear también fuera), creamos una carpeta "components"
2. Dentro de "components" creamos los archivos que queramos (nunca con el nombre "page.jsx" ya que lo transformaríamos en una ruta). Ej: "navigation.js" 