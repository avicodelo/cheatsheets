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

## Crear subrutas dinámicas
1. Dentro del fichero donde queremos crear una subruta creamos otro fichero con el nombre entre corchetes: Ej. [id]
2. Dentro del nuevo fichero creamos otro archivo "page.jsx"

## Crear componentes
1. Dentro de la carpeta "App" (se puede crear también fuera), creamos una carpeta "components"
2. Dentro de "components" creamos los archivos que queramos (nunca con el nombre "page.jsx" ya que lo transformaríamos en una ruta). Ej: "navigation.js" 

## Fetching de datos en componentes (ver ListOfPosts)
Todo componente dentro de la carpeta "app" se ejecuta por defecto en el servidor (react server component) y no en el cliente, por lo tanto, todo lo que se importe se ejecutará primero en el servidor y posteriomente se presentará en el cliente. 
**No se puede hacer uso de hooks ya que éstos pertenecen a la parte del cliente**
1. Se crea un componente
2. Se crea una función fuera de default que haga un fetch a la url deseada
3. Nos hará un fetch estático por defecto. Se pueden añadir opciones:
    1. Para que sea dinámico debemos añadir: {cache: no-store}
    2. Si queremos que la página se autorecargue (incremental static): {next: {
                                                                            revalidate: 20 (nº de segundos de refresco)
                                                                        }}
4. Se transforma la función default en asíncrona con "async"
5. Se llama a la función creada anteriormente con un "await"

## Renderizar componentes en la parte de cliente (ver LikeButton)
Tener en cuenta que sólo es conveniente establecer este ajuste en los componentes más pequeños para que se ahorre tiempo de carga
1. Poner un string en la primera línea: 'use client' (**importante con comilla simple**)