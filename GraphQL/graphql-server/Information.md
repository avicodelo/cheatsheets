Documentación oficial: https://graphql.org, https://www.apollographql.com/docs/apollo-server

# Comandos generales

## Introducción
Se va a utilizar graphQl con la librería de ApolloQL server

## Iniciar el proyecto
1. Creamos la carpeta donde vamos a iniciar nuestro proyecto
2. "npm init -y": crea un archivo package.json estándar de inicio
3. "npm instal @apollo/server graphql": descarga las dependencias de apollo y graphql
4. En package.json añadimos: "type": "module" (para usar ES modules)
5. Crear un archivo: "index.js"

## Levantar el servidor
1. Definir los tipos de datos
2. Definir los resolvers con las queries
3. Crear el servidor con "ApolloServer"
4. Poner el servidor a la "escucha" con "startStandaloneServer"
5. "node index.js": utilizar el servidor levantado 
    **si queremos que se actualice automáticamente: npx nodemon index.js**

## Hacer request a API
1. npm install @apollo/datasource-rest: instala el paquete necesario para las peticiones
2. Crear un archivo donde recogemos los datos de la API a utilizar
3. Incluir en las Defs los nuevos datos que vamos a recoger y la nueva query
4. Añadir en los dataSources en el servidor con la caché

## Uso de apollo-client para comunicar con graphql
1. npm install @apollo/client graphql: instalamos los paquetes de apollo/client
2. Creamos los esquemas para las queries y las mutations y las implementamos

## Conexión con MongoDB
1. Crear los models necesarios
2. Establecer la conexión con la base de datos
3. Importar la conexión en el index.js