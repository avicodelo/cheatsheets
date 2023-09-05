
//Vamos a simular que los comentarios tardan en cargar para practicar el uso de loading
const FetchComments = async() => {

    //Simulación de delay en la recuperación de datos mediante una promesa
    await new Promise(resolve => setTimeout(resolve, 2000))

    //Simulación de error en la recuperación de datos con un throw
    throw new Error("Fallo en los comentarios")

    return (
        fetch('https://jsonplaceholder.typicode.com/comments', { cache: "no-store" })
            .then(response => response.json())
    )
}

export default async function CommentsPage() {

    const comments = await FetchComments();

    return (
        <div>
            {comments.map(({ id, name, body }) => (
                <article key={id}>
                    <h3>{name}</h3>
                    <small>{body}</small>
                </article>
            ))}
        </div>
    )
}