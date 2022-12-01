//**IMPORTAR COMPONENTES**//  

  /*necesitamos importar nuestro componente*/
    //comando import con nombre de función       //función from seguida de la ruta (en la ruta, el punto indica el directorio actual. Sin el punto busca en "node_modules")
      import FirstComponent                         from './components/FirstComponent';
      import './App.css';
    //Al importar funciones que no tengan un "export default" hay que hacerlo en forma de objeto
      import {SecondComponent, ThirdComponent} from "./components/FirstComponent";
    
    function App() {
      return (
        <div className="App">
          {/*Incrustamos nuestro componente como etiqueta. Se puede hacer de dos maneras*/}
            <FirstComponent></FirstComponent>
            <FirstComponent />
          {/*props: atributos con la información que yo necesite*/} 
            <SecondComponent title="Title from app.js" newAttr={15}/>
            <ThirdComponent />
        </div>
      );
    }

    export default App;
