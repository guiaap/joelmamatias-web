import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export function Overlay() {

    return (

        <div 
            style={{  background: "linear-gradient(to top, rgba(26,18,9,.92) 0%, rgba(26,18,9,.5) 50%, rgba(26,18,9,.2) 100%)"}}
            className="absolute inset-0 z-5" 
        />

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
                    h-[400px]
                    bg-center bg-cover 
                `}>

                <Overlay />

                <div>

                

                </div>

            
            </section>

        </div>
    )
}