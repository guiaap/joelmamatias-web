import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {

    const { id } = useParams();

    const post = posts.find(p => p.id === id);

    if (!post) {
        return <h1>Post não encontrado</h1>;
    }

    return (

        <section className="h-[400px]">
            <h1>Teste</h1>
        </section>
    )
}