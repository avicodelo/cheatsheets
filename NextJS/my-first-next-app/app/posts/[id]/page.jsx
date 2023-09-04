//Especificamos que queremos recuperar los parámetros mediante "params" que devuelve el dato que le metamos por url
export default function SpecificPost ({params}) {

    //es necesario establecer el nombre de la variable igual que el nombre del fichero (en este caso "id")
    const {id} = params;

    return (
        <h1> Este es el post número {id}</h1>
    )
}