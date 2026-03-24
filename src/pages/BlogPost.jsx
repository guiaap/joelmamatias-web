import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { PostContext } from "../contexts.js";
import { useEffect } from "react";
import PostHeroSection from "../components/BlogPostComponents/PostHeroSection.jsx";
import PostArticle from "../components/BlogPostComponents/PostArticle.jsx";
import PostSidebar from "../components/BlogPostComponents/PostSidebar.jsx";

export default function BlogPost() {

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const currentIndex = posts.findIndex(p => p.id === id);

    const post = posts[currentIndex];
    const previousPost = posts[currentIndex - 1] || null;
    const nextPost = posts[currentIndex + 1] || null;

    return (

        <div>

            <PostContext.Provider value={{post, previousPost, nextPost}} >

                <PostHeroSection />

                <div className="
                    flex flex-col xl:flex-row
                    justify-between
                    max-w-(--container) mx-auto
                ">

                    <main className="*:py-5 lg:*:py-10 *:px-5">
                        <PostArticle />
                    </main>

                    <PostSidebar />

                </div>

            </PostContext.Provider>
            
        </div>
    )
}