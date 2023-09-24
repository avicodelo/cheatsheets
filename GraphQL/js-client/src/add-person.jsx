import { useState } from "react";

//Importamos los componentes de Apollo para el mutation
import {gql, useMutation} from "@apollo/client"
import { GET_ALLPERSONS } from "./persons";

//Creamos el esquema para añadir la persona
const ADD_PERSON = gql`
  mutation addNewPerson ($name: String!, $surname1: String!, $surname2: String, 
    $alias: String, $street: String!, $city: String!) {
      addPerson(
        name: $name
        surname1: $surname1 
        surname2: $surname2
        alias: $alias
        city: $city
        street: $street
    ){
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

export function AddPerson() {
  //Const settings
  const initialStateSignUp = {
    name: "",
    surname1: "",
    surname2: "",
    alias:"",
    street: "",
    city: ""
  }
  const [signUpData, setSignUpData] = useState(initialStateSignUp); //User data variable

  //Updates customer data and check the password
  const handleImput = (e) => {
    setSignUpData({ ...signUpData, ...{ [e.target.name]: e.target.value } });
  }

  //Usamos el Mutation, necesario indicarle un trigger (como en useLazyQuery)
  const [addNewPerson] = useMutation(ADD_PERSON,
    {refetchQueries: [GET_ALLPERSONS]}
    )

  //Sends the info to server
  const signUpCustomer = (e) => {

      e.preventDefault()

      //Activamos el trigger
      addNewPerson({variables: signUpData})

      setSignUpData(initialStateSignUp);
    

  }

  return (
    <div>

      <form onSubmit={signUpCustomer}>

        <div>
          <label htmlFor="name">Nombre: </label>
          <input type="text" onChange={handleImput} value={signUpData.name} id="name" name="name"
            pattern="([a-zA-ZÀ-ÿ\u00E0-\u00FC\u00f1\u00d1]*\s?){1,3}" maxLength="50" placeholder='Nombre' required />
        </div>

        <div>
          <label htmlFor="surname1">Primer apellido: </label>
          <input type="text" onChange={handleImput} value={signUpData.surname1} id="surname1" name="surname1"
            pattern="([a-zA-ZÀ-ÿ\u00E0-\u00FC\u00f1\u00d1]*\s?){1,3}" maxLength="50" placeholder='Primer apellido' required />
        </div>

        <div>
          <label htmlFor="surname2">Segundo apellido: </label>
          <input type="text" onChange={handleImput} value={signUpData.surname2} id="surname2" name="surname2"
            pattern="([a-zA-ZÀ-ÿ\u00E0-\u00FC\u00f1\u00d1]*\s?){1,3}" maxLength="50" placeholder='Segundo apellido' />
        </div>

        <div>
          <label htmlFor="alias">Alias: </label>
          <input type="text" onChange={handleImput} value={signUpData.alias} id="alias" name="alias"
            pattern="([a-zA-ZÀ-ÿ\u00E0-\u00FC\u00f1\u00d1]*\s?){1,3}" maxLength="50" placeholder='Alias' />
        </div>


        <div>
          <label htmlFor="street">Calle: </label>
          <input type="text" onChange={handleImput} value={signUpData.street} id="street" name='street'
            pattern="([a-zA-ZÀ-ÿ\u00E0-\u00FC\u00f1\u00d1]*\s?){1,}" maxLength="60" placeholder='Calle' required />
        </div>

        <div>
          <label htmlFor="city">Ciudad:</label>
          <input type="text" onChange={handleImput} value={signUpData.city} id="city" name='city'
            pattern="([a-zA-ZÀ-ÿ\u00E0-\u00FC\u00f1\u00d1]*\s?){1,}" maxLength="60" placeholder='Ciudad' required />
        </div>

        <input type="submit" value="Enviar" />

      </form>

    </div>
  )
}
