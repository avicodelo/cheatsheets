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