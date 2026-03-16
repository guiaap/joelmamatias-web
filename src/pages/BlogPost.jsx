import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export function Overlay() {

    return (

        <div className="absolute inset-0 z-5 bg-(--overlay)" />

    )
}

export default function BlogPost() {

    const { id } = useParams();

    const post = posts.find(p => p.id === id);

    if (!post) {
        return <h1>Post não encontrado</h1>;
    }

    return (

        <div className="[&>section]:py-15 [&>section]:px-5">
            <section 
            style={{backgroundImage: `url(${post.image})`}}
                className={`
                    relative
                    bg-center bg-cover 
                `}>

                <Overlay />

                <div>

                

                </div>

            
            </section>
        </div>
    )
}