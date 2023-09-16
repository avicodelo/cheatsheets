Documentación oficial: https://nextjs.org/

# Comandos generales

## Requisitos 
recomendados: nodejs, npm, yarn
recursos externos:
    - tailwind CSS: para incorporar librería de CSS
    - supabase: nos ofrece Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings


## Iniciar el proyecto
1. npx create-next-app@latest: inicia la app
2. se configura el proyecto siguiendo las instrucciones
3. npm run: sólo para comprobar los scripts que tenemos en la carpeta
4. npm run dev: corre el proyecto y usa el puerto 3000 por defecto

## Configurar ESlint
1. npm install standard -D: instala el paquete con las reglas preestablecidas
2. npx eslint --init: crea el json basándose en preguntas de configuración
    1. Para desactivar las reglas que menos se utilizan, añadir lo siguiente en eslint.json
        "rules": {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-misused-promises": "off"
        }
    2. Para indicar el parser añadir
        "parserOptions": {
            "project": "./tsconfig.json"
        } 

## Crear rutas y subrutas estáticas
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

## Fetching de datos en componentes (ver ListOfPosts.jsx)
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

## Renderizar componentes en la parte de cliente (ver LikeButton.jsx)
Tener en cuenta que sólo es conveniente establecer este ajuste en los componentes más pequeños para que se ahorre tiempo de carga
1. Poner un string en la primera línea: 'use client' (**importante con comilla simple**)

## Uso de "layouts.jsx"
1. Crear un archivo "layout.jsx" dentro del directorio donde se desea incorporar el layout
2. Añadir "{children}" dentro de las variables de la función default
3. Introducir dicha variable en el return para que se renderice
    **Los layouts mantienen los estados hasta que se desmontan**

## Uso de "loading.jsx"
1. Crear un archivo "loading.jsx" dentro del directorio donde se desea incorporar (esto permite mostrar lo que deseamos mientras carga la ruta a la que pertenece, generalmente al hacer fetching)
2. No hace falta importarlo en ningún archivo (actúa automáticamente cuando cargan los datos)


## Uso de "error.jsx"
1. Crear un archivo "error.jsx" dentro del directorio donde se desea incorporar (esto permite mostrar un mensaje de error cuando se hace fetching)
2. Es obligatorio que sea 'use client' para su correcto funcionamiento

## Agrupar rutas
1. Crear un fichero con el nombre entre paréntesis. Ej. "(banner-shared)"
2. Introducir las rutas que queremos agrupar en el fichero
3. Poner los componentes y layout que queremos compartir entre ambas, en la raíz del fichero

## Importar fuentes (ver Font.js)
1. Archivo donde queremos implementar: import { nombre-de-la-fuente } from "next/font/google"
2. Guardar la fuente en una constante y especificar opciones
3. Usar la fuente directamente dentro de un className:
    1. Si NO especificamos variable dentro de opciones: className = {font.className}
    2. Si tenemos una variable (en el body general): className = {font.variable}
        Con esta confi ya podríamos usar la variable en el CSS

## Uso de imágenes
1. Importar "Image" en el archivo a aplicar
2. Usar Image formato html. Obligatorio indicar width, height y alt
3. Configurar el dominio en el archivo "next.config.js"
