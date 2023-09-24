import { useEffect, useState } from "react"

//Importamos lo elementos de Apollo a utilizar 
//useQuery: se ejecuta inmediatamente
//useLazyQuery: se ejecuta al llamar al trigger (trigger es una función que se le indica. Muy útil para eventos)
import { gql, useQuery, useLazyQuery } from "@apollo/client"

//Definimos la query que necesitamos (se le puede poner un nombre a la query. En este caso "getAllPersons")
//IMPORTANTE: Si devuelve data:undefined asegurarse que las propiedades tienen el mismo nombre
//La exportamos para hacer un refetch en el mutation ("add-person.jsx")
export const GET_ALLPERSONS = gql`
    query getAllPersons{
      allPersons{
        completeName{
          name
          surname1
        }
        alias
        address
        id
      }
    }
  `
//Se realiza una segunda query definiendo la variable e introduciéndola en dicha query
const GET_PERSON_BY_ID = gql`
    query getPersonById ($idToSearch: ID!){
        findPersonById(id: $idToSearch){
            completeName{
                name
                surname1
                surname2
            }
            alias
            address
            id
        }
    }
`
//Resolvemos la petición en un componente (necesario que comience con mayúscula por ser componente)
export const DisplayAllPersons = () => {
    const [person, setPerson] = useState(null)
    
    //Uso de useLazyQuery (getById es el trigger y result los resultados que arroja cuando se resuelve)
    const [getById, result] = useLazyQuery(GET_PERSON_BY_ID)

    useEffect(() => {
        if (result.data) {
            setPerson(result.data.findPersonById)
        }

    }, [result])

    const showPerson = (id) => {
        //Activamos el trigger y le pasamos las variables definidas (en este caso "idToSearch")
        getById({
            variables: {
                idToSearch: id
            }
        })
    }

    //Uso de useQuery. 
    //Podemos hacer polling ("pollInterval") para que cada cierto tiempo se repita. No es muy recomendable ya que realiza infinitas peticiones
    const { data, loading, error } = useQuery(GET_ALLPERSONS/* , {pollInterval: 2000} */)
    //Añadimos una respuesta que se ejecute mientras carga
    if (loading) return (<span>Loading...</span>)
    //Añadimos una respuesta cuando hay error
    if (error) return (<span>{error.message}</span>)

    if (person) {
        return (
            <div>
                <p></p>
                <p>{person.alias ? person.alias : <span style={{color: "red"}}>No tiene alias</span>}</p>
                <p>{person.address}</p>
                <button onClick={()=>{setPerson(null)}}>Cerrar</button>
            </div>
        )
    }

    return (
        <ol>
            {
                data.allPersons.map((person) => {
                    return (
                        <li key={person.id} onClick={() => { showPerson(person.id) }}>
                            {person.completeName.name}
                            <br />
                        </li>
                    )
                })
            }
        </ol >
    )

}