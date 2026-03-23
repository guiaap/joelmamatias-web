import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { PostContext } from "../contexts.js";
import PostHeroSection from "../components/BlogPostComponents/PostHeroSection.jsx";

export default function BlogPost() {

    const { id } = useParams();

    const post = posts.find(p => p.id === id);

    if (!post) {
        return <h1>Post não encontrado</h1>;
    }

    return (

        <div className="[&>section]:py-15 [&>section]:px-5">

            <PostContext.Provider value={post} >

                <PostHeroSection />

            </PostContext.Provider>
            
        </div>
    )
}