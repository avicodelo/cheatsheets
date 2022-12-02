//Es necesario importar PropTypes para tipar los props de los componentes   
    import PropTypes from "prop-types";

export default function LogicalComponent({title, textColor}) {
    /*Creamos la función del onclick. Si queremos introducir parámetros, debemos introducir la lógica en el return*/
    const changeColor = function(textColor){
        return (e) => {
            e.target.style.backgroundColor = textColor;
        }
    }
    
    /*Para poner estilos inline es necesario enviarlo como objeto. El nombre de las propiedades se indica como JS */
        const estilo1 = {
            color: "green"
        }

        return (
            <div>
                <h1>{title}</h1>
            
        {/*Hacemos uso del operador ternario dentro de return*/}
                {textColor === "red" ?
                    (<p style={{color: textColor}}>The text color is {textColor}</p>) :
                    (<p style={{color: textColor}}>The text color isn't red</p>)}
                
        {/*Hacer un cortocircuito (un if sin else) */}
                {estilo1.color==="green" && 
                <p style={estilo1}>The text color is {estilo1.color}</p>}

        {/*Los eventos se introducen inline */}
            <button onClick={changeColor(textColor)}>Change background to {textColor}</button>
        </div>
    )
}

/*Establecer propiedades por defecto de los props */
LogicalComponent.defaultProps = {
    title: "título de prueba",
    textColor: "blue"
}

//Establecemos el tipado de los props. Tipados: string, number, bool, array, func, object, any
LogicalComponent.propTypes = {
    title: PropTypes.string.isRequired, //si no cumplimos con el campo requerido nos lanza error
    textColor: PropTypes.string,
    number: PropTypes.number
}