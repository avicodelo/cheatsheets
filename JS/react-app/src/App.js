//**IMPORTAR COMPONENTES**//  

/*necesitamos importar nuestro componente*/
//comando import con nombre de función       //función from seguida de la ruta (en la ruta, el punto indica el directorio actual. Sin el punto busca en "node_modules")
import FirstComponent from './components/BasicComponent';
import './App.css';
//Al importar funciones que no tengan un "export default" hay que hacerlo en forma de objeto
import { SecondComponent, ThirdComponent } from "./components/BasicComponent";
import LogicalComponent from './components/LogicalComponent';
import StateHook from './components/StateHook';

function App() {
  const ejemplo = {
    electronica: [
      { id: 27, producto: "Televisor", marca: "LG", modelo: "XP7302", precio: 399 },
      { id: 28, producto: "Equipo Hi-FI", marca: "Samsung", modelo: "VF235", precio: 179 }
    ],
    alimentacion: [
      { id: 30, producto: "Galletas", marca: "María", precio: 0.90 },
      { id: 31, producto: "Ensalada", marca: "Imizurra", precio: 1.30 }
    ]
  };
  return (
    /*El atributo class cambia por className*/
    <div className="App">
      {/*Incrustamos nuestro componente como etiqueta. Se puede hacer de dos maneras*/}
      <FirstComponent></FirstComponent>
      <FirstComponent />
      {/*props: atributos con la información que yo necesite*/}
      <SecondComponent title="Title from app.js" newAttr={15} />
      <ThirdComponent category="electronica" products={ejemplo.electronica} />
      <ThirdComponent category="alimentacion" products={ejemplo.alimentacion} />
      <LogicalComponent title="Pruebas lógicas"/>
      <LogicalComponent title="Pruebas lógicas 2" textColor="red"/>
      <StateHook />
    </div>
  );
}

export default App;
