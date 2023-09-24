import reactLogo from './assets/react.svg'
import './App.css'

//Importamos el componente
import { DisplayAllPersons } from './persons'
import {AddPerson} from './add-person'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        {/* Incluimos el componente */}
        <DisplayAllPersons />
        <AddPerson />
      </div>

    </>
  )
}

export default App
