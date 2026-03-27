import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { posts } from "../../data/posts.js";
import { PostContext } from "../../contexts/PostContext.js";
import PostHeroSection from "./components/PostHeroSection.jsx";
import PostArticle from "./components/PostArticle.jsx";
import PostSidebar from "./components/PostSidebar.jsx";

export default function Post() {

    const { id } = useParams();

    useEffect(() => { window.scrollTo(0, 0); }, [id]);

    const currentIndex = posts.findIndex(p => p.id === id);
    const post = posts[currentIndex];
    const previousPost = posts[currentIndex - 1] || null;
    const nextPost = posts[currentIndex + 1] || null;

    return (

        <PostContext.Provider value={{ post, previousPost, nextPost }}>

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
    )
}