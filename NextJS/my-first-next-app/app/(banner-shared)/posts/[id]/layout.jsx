
import Link from "next/link";
import { resolve } from "styled-jsx/css";

const FetchSinglePost = async (id) => {

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
}

//Especificamos que queremos recuperar los parámetros mediante "params" que devuelve el dato que le metamos por url
export default async function postSight({ children, params }) {


    //es necesario establecer el nombre de la variable igual que el nombre del fichero (en este caso "id")
    const { id } = params;
    const post = await FetchSinglePost(id);


    return (
        <div>
            <article>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </article>
            <Link href={`/posts/${id}/comments`} style={{ color: "blue" }}> Ver comentarios</Link>

            {/* importante incorporar "children" para que todos los recursos subsecuentes se carguen */}
            {children}
        </div>
    )
}
