//importamos el boton de like
import Link from "next/link";
import LikeButton from "./LikeButton";

//Creamos la función que haga fetch de datos
const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" })
        //la dejamos en promesa
        .then(res => res.json())
}

//transformamos la función default en asíncrona
export default async function ListOfPosts() {

    //resolvemos la promesa con await(importante poner los paréntesis a la función de fetch)
    const posts = await fetchPosts();

    return (
        /*usamos la información obtenida (si aplicamos cualquier tipo de filtro, 
        se hará en el servidor y no cargaremos info innecesaria)*/
        <div>
            {posts.slice(0, 5).map(post => (
                <article key={post.id}>
                    {/*Podemos crear un link para que nos lleve a la información del post */}
                    <Link href={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <br></br>
                    <LikeButton id={post.id} />
                </article>
            ))}
        </div>
    )
}