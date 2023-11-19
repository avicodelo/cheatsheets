import reactLogo from './assets/react.svg'
import './App.css'
import { useState } from 'react'

//Importamos el componente
import { DisplayAllPersons } from './persons'
import { AddPerson } from './add-person'
import UserLogin from './login'
import { useApolloClient } from '@apollo/client'

function App() {
  const [loginActivated, setLoginActivated] = useState(false)
  const [token, setToken] = useState(localStorage.getItem("user-token"))

  const client = useApolloClient()

  const logOut = () => {
    setToken(null)
    setLoginActivated(false)
    localStorage.clear()
    client.resetStore()
  }

  return (
    <>
      <div>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        {!token &&
          <button onClick={() => { setLoginActivated(!loginActivated) }}>
            {loginActivated ? <p>Cancelar</p> : <h3 style={{ color: "green" }}>Loging</h3>}
          </button>
        }
        {/* Incluimos el componente */}
        <DisplayAllPersons />

        {loginActivated &&
          <div>{token ?
            <button onClick={logOut}> Cerrar Sesión</button>
            :
            <UserLogin setToken={setToken} />
          }</div>
        }
        <AddPerson />

      </div>

    </>
  )
}

export default App
