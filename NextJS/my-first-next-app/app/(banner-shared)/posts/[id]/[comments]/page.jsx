//Importamos el componente de imagen
import Image from "next/image";

//Vamos a simular que los comentarios tardan en cargar para practicar el uso de loading
const FetchComments = async(id) => {

    //Simulación de delay en la recuperación de datos mediante una promesa
    await new Promise(resolve => setTimeout(resolve, 2000))

    //Simulación de error en la recuperación de datos con un throw
    /* throw new Error("Fallo en los comentarios") */

    return (
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: "no-store" })
            .then(response => response.json())
    )
}

export default async function CommentsPage({params}) {

    const {id} = params
    const comments = await FetchComments(id);

    return (
        <div>
            {comments.map(({ id, name, body }) => (
                <article key={id}>
                    <h3>{name}</h3>
                    <small>{body}</small> <br></br>
                    {/* Hacemos uso del componente de imagen para introducir los avatares */}
                    <Image alt="Author avatar" width="100" height="100" src={`https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=${name}`}></Image>
                </article>
            ))}
        </div>
    )
}