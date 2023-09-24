//Importamos Apollo Server y uuid
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { GraphQLError } from "graphql"
import { v1 as uuid } from "uuid"
import UsersAPI from "./users-api.js"

//Datos a recuperar por GraphQL
const persons = [
    {
        "name": "Manolo",
        "surname1": "Rodríguez",
        "surname2": "Serpa",
        "alias": "Lolo",
        "city": "Sevilla",
        "street": "Calle Cáucaso",
        "id": "1"
    },
    {
        "name": "Javier",
        "surname1": "Manzano",
        "surname2": "Serrano",
        /* "alias": "Javixu", */
        "city": "San Sebastián",
        "street": "Calle Pintxo",
        "id": "2"
    },
    {
        "name": "Jose Luís",
        "surname1": "Bernal",
        "surname2": "Caños",
        "alias": "Pepelu",
        "city": "Córdoba",
        "street": "Calle Gobernador",
        "id": "3"
    }
]

//Se definen los tipos de datos
//Se añade #graphql para indicar que es un esquema de tipos
//El signo ! indica que es un campo obligatorio
/*Para recuperar un objeto dentro de otro, hay que especificarlo (es muy importante diferenciar los 
datos recuperados directamente del servidor a cómo quiero representarlos)*/
const typeDefs = `#graphql
    #Definimos los argumentos que podemos utilizar para filtrar datos con enum
    enum YesNO{
        YES
        NO
    }

    type CompleteName {
        name: String!
        surname1: String!
        surname2: String
    }
    type Person {
        completeName: CompleteName!
        alias: String
        city: String!
        street: String!
        id: ID!
        address: String!
        checked: Boolean!
    }

    type User {
        id: ID!
        name: String
        username: String
        email: String
    }

    #Definimos los datos que nos devuelven las queries
    type Query {
        
        personCount: Int!

        #Vamos a filtrar si la persona tiene alias pasándole por parámetros el enum
        allPersons(alias: YesNO): [Person]!

        findPersonById(id: ID!): Person

        usersFromRest: [User]
      }

    #Definimos los datos que nos devuelven las mutations
    type Mutation {
        addPerson(
            name: String!
            surname1: String!
            surname2: String
            alias: String
            city: String!
            street: String!
        ): Person
        
        editCity(
            name: String!
            city: String!
        ): Person
    }
`
//Se crean los resolvers para definir las queries que vamos a utilizar para la obtención de datos
//Podemos definir campos adicionales en nuestros esquemas utilizando la raíz de la procedencia de los datos
const resolvers = {
    //Definimos los pasos para obtener las queries
    Query: {
        
        //Recuperamos los users a través de la api creada usando los "dataSources" previamente definidos
        usersFromRest: async (_root, _args, { dataSources }) => {
            return dataSources.usersAPI.getUser();
          },

          /* SEGUNDA OPCIÓN DE FETCHING
           usersFromRest: async () => {
            const allUsers = await fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
            console.log(allUsers);
            return allUsers

        }, */

        personCount: () => persons.length,

        //Vamos a definir la query para filtrar usando el enum (es opcional su uso ya que no usamos ! )
        allPersons: (root, args) => {
            if (args.alias) {
                return persons.filter(person => args.alias === "YES" ? person.alias : !person.alias)

            }

            return persons
        },
        //Se pueden indicar los argumentos que se van a incluir a la query cuando se utilice
        findPersonById: (root, args) => {
            const { id } = args
            return persons.find(person => person.id === id)
        }
    },

    //Definimos los pasos para obtener las Mutations
    Mutation: {
        addPerson: (root, args) => {
            //Le podemos añadir lógica para que arroje un error personalizado
            if (persons.find(p => p.name === args.name)) {
                throw new GraphQLError("El nombre tiene que ser único",
                    {
                        extensions: {
                            code: 'WRONG_USER_INPUT',
                            /* Se pueden añadir campos personalizados dentro de extensions*/
                            invalidArgs: args.name
                        }
                    })
            }
            const person = { ...args, id: uuid() }
            persons.push(person)
            return person
        },
        editCity: (root, args) => {
            let personIndex = undefined
            const updatePerson = persons.map((person, index) => {
                if (person.name === args.name) {
                    person.city = args.city
                    personIndex = index
                }
                return person
            })
            
            if (personIndex === undefined) return null
            return updatePerson[personIndex]
            /*OTRA OPCION

                const personIndex = persons.findIndex(p => p.city === args.city)
                if (personIndex === -1) return null            
                const person = persons[personIndex]
                const updatedPerson = {...person, city: args.city}
                persons[personIndex] = updatedPerson
                return updatedPerson
            */

        }
    },

    //Hay que utilizar el mismo nombre que el esquema y añadir las nuevas definiciones en los tipos
    //Podemos utilizar datos de la raíz o establecer valores diferentes
    Person: {
        completeName: (root) => {
            return {
                name: root.name,
                surname1: root.surname1,
                surname2: root.surname2
            }
        },
        address: (root) => `${root.street} ${root.city}`,
        checked: () => true
    }
}

//Se inicializa el servidor con Apollo y se le añaden los esquemas con los resolvers
/*Si damos nombres diferentes a typeDefs y resolvers hay que indicarlo de la siguiente manera:
{
    typeDefs: definicionDeTipos (nombre_de_variable inventado para los tipos),
    resolvers: resoluciones (nombre_de_variable inventado para los resolvers)
}*/
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//Se levanta el servidor y se pone a la escucha.
// 
  const { url } = await startStandaloneServer(server, {
    context: async () => {
        //Se define la caché del servidor para hacer uso de ella en las apis
      const { cache } = server;
      return {
        //Pasamos la caché a cada fuente.
        //Se definen los dataSources, uno por cada API
        dataSources: {
          usersAPI: new UsersAPI({ cache })
        },
    
      };
    },
  });
  
  console.log(`🚀  Server ready at ${url}`);

/* server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
}) */