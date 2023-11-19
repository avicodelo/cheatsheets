import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client"

//GraphQL data
const DO_LOGIN = gql`
    mutation doLogin($userName: String!, $password:String!){
        login(
            userName : $userName
            password : $password
            ){
                value
            }
    }`

export default function UserLogin({setToken}) {
    const initialState = {
        userName: "",
        password: ""
    }

    const [loginForm, setLoginForm] = useState(initialState)
    const [loginError, setLoginError] = useState(null)

    const handleInput = (e) => {
        setLoginForm({ ...loginForm, ...{ [e.target.name]: e.target.value } })
    }

    //Definimos la mutacion con el trigger y el resultado
    const [doLogin, result] = useMutation(DO_LOGIN, {
        onError: ({ graphQLErrors }) => setLoginError(graphQLErrors[0].message)
    })


    useEffect(() => {
        if (result.data) {
            const token = result.data.login.value
            setToken(token)
            localStorage.setItem("user-token", token)
        }

    }, [result.data])

    const signIn = (e) => {
        e.preventDefault()
        doLogin({ variables: loginForm })
        setLoginForm(initialState)
        setLoginError(null)
    }

    return (
        <>
            <form onSubmit={signIn}>
                <h3>Iniciar Sesión</h3>
                {loginError && <p style={{ color: "red" }}>{loginError}</p>}
                <label htmlFor="userName">Nombre de usuario: </label>
                <input type="text" id="userName" name="userName" value={loginForm.userName} onChange={handleInput} required />

                <br />

                <label htmlFor="password">Contraseña: </label>
                <input type="password" id="password" name="password" value={loginForm.password} onChange={handleInput} required />
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}