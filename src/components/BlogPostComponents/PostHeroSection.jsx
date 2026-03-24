import { useContext } from "react";
import { PostContext } from "../../contexts.js";
import { Separator } from "../HomeSections/ContactSection.jsx"

export function PostPath() {

    const { post } = useContext(PostContext);

    return (

        <div className="
            w-fit mx-auto md:mx-0
            flex gap-1 items-center
            text-(--transparent-white-smooth)
            text-[0.8rem]
            uppercase tracking-widest
        ">
            <span>Blog &gt;</span>
        
            <span className="
                inline-block 
                px-1
                text-(--primary-gold)
                border-[0.1px] border-(--dark-gold)
            ">
                 {post.category}
            </span>

        </div>
    )
}

export function PostTitle() {

    const { post } = useContext(PostContext);

    return (

        <h1 className="
            mt-5
            font-cormorant font-bold
            text-(--white)
            text-center md:text-left
            text-[clamp(2rem,5vw,3.5rem)]
            leading-tight
        ">
            {post.title}
        </h1>
    )
}

export function PostAuthor() {

    const { post } = useContext(PostContext);

    return (

        <div className="flex items-center gap-2">

            <div className="
                h-7 w-7
                flex items-center justify-center
                font-cormorant font-bold
                text-(--primary-brown) text-[1rem]
                rounded-full
                bg-(--primary-gold)
            ">
                JM
            </div>

            {post.author}
        </div>

    )
}

export function PostDate() {

    const { post } = useContext(PostContext);

    return (

        <div>
            {post.date}
        </div>
    )
}

export function PostReadingTime() {

    const { post } = useContext(PostContext);

    return (
        
        <div>
            {post.readingTime} de leitura
        </div>
    )
}

export function BallSeparator({size, color}) {

    return (

        <div 
            style={{ height:`${size}`, width:`${size}`, backgroundColor:`var(${color})` }}
            className="rounded-full"
        />
    )
}

export default function PostHeroSection() {

    const { post } = useContext(PostContext);

    return (

        <section 
            style={{ backgroundImage: `url(${post.image})` }}
            className="
                flex items-center
                py-10 px-5
                min-h-100
                bg-(--transparent-brown-strong)
                bg-blend-darken
                bg-cover bg-center bg-no-repeat
                shadow-xl
        ">

            <div className="max-w-(--container) mx-auto">

                <PostPath />
                <PostTitle />

                <div className="w-fit mx-auto md:mx-0">
                    <Separator width="50px" color="--dark-gold" />
                </div>
                
                <div className="
                    flex flex-col md:flex-row gap-2
                    items-center md:justify-start
                    text-[0.8rem] text-(--transparent-white-smooth)
                ">
                    <PostAuthor />
                    <BallSeparator size="3px" color="--transparent-white-smooth" />
                    <PostDate />
                    <BallSeparator size="3px" color="--transparent-white-smooth" />
                    <PostReadingTime />
                </div>

            </div>




        </section>
    )
}