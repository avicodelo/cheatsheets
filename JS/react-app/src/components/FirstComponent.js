//importamos Fragment para poder usarlo en el SecondComponent
  import { Fragment } from "react";


//rfc (shortcut de react functional component
//necesitamos el "export default"
  export default function FirstComponent() {
    return (
      <div>
        <h1>Title of my FIRST component</h1>
        <small>15 de septiembre del futuro</small>
        <p>my entry is related with Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, adipisci.</p>
      </div>
    )
  };

//otra manera de exportarlo
  //export default FirstComponent; 
  //solo se puede aplicar un export default por archivo ya que la filosofía es crear un archivo por componente

//alternativa para exportar

//return siempre tiene que devolver un único elemento (dentro de este puede haber infinitas cosas)
//si no queremos englobar nuestro contenido con ninguna etiqueta hay que utilizar fragment (necesito importarlo)
//para recibir los props que establecemos en el padre (app.js) los introducimos como argumento 
  function SecondComponent(props) {
    //los props son objetos
      console.log(props.title);

    return (
      <Fragment>
      {/*Las variables en JSX se indican entre llaves */}
        <h1>{props.title}</h1>
        <p>This component has been modified {props.newAttr} times</p>
      </Fragment>
    )
  };

//el modo abreviado de fragment es el siguiente (en este caso no necesito importarlo)
  function ThirdComponent() {
    return (
      <>
        <h1>I am the THIRD component</h1>
      </>
    )
  };

//método para exportar funciones que no tienen "export default" es mediante objetos
  export {SecondComponent, ThirdComponent};