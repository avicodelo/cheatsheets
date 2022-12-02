
//Es necesario importar useState para usar el hook state
//Este hook se usa en todos aquellos elementos cuyo estado inicial es susceptible de cambiar
    import {useState} from "react";

export default function StateHook({title, textColor}) {
    /*Hacemos una asignación con la la función del hook
    que nos devuelve un array */
    //nomenclatura estándar para establecer las variables. En los paréntesis de useStates se establece el estado inicial
        const [color, setColor]= useState(textColor);
        const goodCheck = "green";
        const badCheck = "red";
        const [btnText, setBtnText]= useState(goodCheck === color ? "red": goodCheck)
       

    /*Creamos la función del onclick. Si queremos introducir parámetros, debemos introducir la lógica en el return*/
        const changeColor = function(newColor){
            return () => {
               if(newColor === color){
            //setColor cambia el valor de color
               setColor(badCheck)
               setBtnText(newColor)
               } else{
               setColor(newColor)
               setBtnText(badCheck)
               };
            }
        }

        return (
            <div>
                <h1>{title}</h1>
            
        {/*Hacemos uso del operador ternario dentro de return*/}
                {goodCheck === color ?
                    (<p style={{color: color}}>The text color is {color}</p>) :
                    (<p style={{color: color}}>The text color isn't {goodCheck}</p>)}

        {/*Los eventos se introducen inline */}
            <button onClick={changeColor(goodCheck)}>Change text color to {btnText}</button>
        </div>
    )
}

/*Establecer propiedades por defecto de los props */
StateHook.defaultProps = {
    title: "useState",
    textColor: "black"
}

