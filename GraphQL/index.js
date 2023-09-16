//Importamos Apollo Server y uuid
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { v1 as uuid } from "uuid"



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

    #Definimos los datos que nos devuelven las queries
    type Query {
        personCount: Int!
        allPersons: [Person]!
        findPersonById(id: ID!): Person
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
    }
`
//Se crean los resolvers para definir las queries que vamos a utilizar para la obtención de datos
//Podemos definir campos adicionales en nuestros esquemas utilizando la raíz de la procedencia de los datos
const resolvers = {
    //Definimos los pasos para obtener las queries
    Query: {
        personCount: () => persons.length,
        allPersons: () => persons,
        //Se pueden indicar los argumentos que se van a incluir a la query cuando se utilice
        findPersonById: (root, args) => {
            const { id } = args
            return persons.find(person => person.id === id)
        }
    },

    //Definimos los pasos para obtener las Mutations
    Mutation: {
        addPerson: (root, args) => {
            const person = {...args, id: uuid()}
            persons.push(person)
            return person
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

//Se levanta el servidor y se pone a la escucha en el puerto indicado
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

/* server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
}) */