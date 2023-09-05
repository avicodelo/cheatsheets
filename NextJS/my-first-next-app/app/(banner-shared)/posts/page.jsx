//importamos el componente de la lista de posts
import ListOfPosts from "./ListOfPosts"


export default async function PostsPage() {
    return (
        <div>
            <h1>Esta es la página de Posts</h1>

            {/* Usamos el componente importado */}
            <ListOfPosts />
        </div>
    )
}