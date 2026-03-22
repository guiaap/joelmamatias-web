import SectionTag from "./SectionTag.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { useState } from "react";
import { posts } from "../data/posts.js";


export function BlogCard({id, image, alt, date, title, description}) {

    return (

        <article 
        style={{ scrollSnapAlign: "start" }}
        className="
            relative min-w-75 pb-8
            flex-1
            snap-start
            border border-(--transparent-gold)
            shadow-lg
            overflow-hidden
            transition-all duration-300
            hover:scale-102
            hover:shadow-xl
        ">
            <img 
                src={image} 
                alt={alt} 
                className="h-50 md:h-62.5 w-full object-cover"
            />
            
            <div className="
                flex flex-col gap-3 
                h-full p-5 
                bg-(--white)
            ">

                <span className="
                    text-[0.8rem] uppercase
                    text-(--dark-gold) tracking-widest
                ">
                    {date}
                </span>

                <h3 className="font-cormorant text-[1.4rem] font-medium">
                    {title}
                </h3>

                <p>
                    {description}
                </p>

                <Link 
                    to={`/blogpost/${id}`}
                    className="
                        absolute bottom-5
                        w-38.75 
                        flex items-center justify-between
                        text-(--dark-gold) text-[0.8rem]
                        uppercase tracking-widest
                        transition-all duration-300
                        hover:w-40 hover:text-(--primary-brown)
                        hover:[&>svg]:fill-(--primary-brown)
                    ">

                    <span>Continuar Lendo</span> 

                    <Icon name="arrow-forward" size="15px" color="#8B6F47" />
                    
                </Link>

            </div>

        </article>
    );
}

export function CarouselButton({iconName, scroll}) {

    return (

        <button 
        onClick={scroll}
        className="
            flex items-center justify-center
            h-10 w-10 rounded-full
            border border-(--dark-gold)
        ">
            <Icon name={iconName} size="25px" color="#8B6F47" />
        </button>
    )
}

export function Indicator({isActive}) {

    return (

        <span className={`
            h-3 w-3
            rounded-full
            border border-(--dark-gold)
            ${ isActive ? "bg-(--primary-gold)" : "bg-transparent"}
        `}>

        </span>
    )
}

export default function BlogSection() {

    const [index, setIndex] = useState(0);
  
    const carouselRef = useRef(null);

    function scrollLeft() {

        if (index === 0) return;

        carouselRef.current.scrollBy({
        left: -320,
        behavior: "smooth"
        });
        
        setIndex(prev => prev - 1);
    }

    function scrollRight() {

        if (index === posts.length - 1) return;

        carouselRef.current.scrollBy({
        left: 320,
        behavior: "smooth"
        });

        setIndex(prev => prev + 1);
    }

    return (

        <section id="blog">

            <div className="max-w-(--container) mx-auto">

                <SectionTag text="Conhecimento" />
                
                <SectionTitle
                    text1="Últimas do " text2="Blog"
                    color1="--primary-brown" color2="--primary-gold"
                />
                
                <div 
                ref={carouselRef} 
                className="
                    flex gap-5 md:gap-8 justify justify-between
                    p-4 pb-10
                    overflow-x-auto snap-x snap-mandatory 
                    scroll-smooth
                ">
                    {posts.map((post, index) => (
                        <BlogCard
                            key={index}
                            id={post.id}
                            image={post.image}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                         />
                    ))}
                </div>

                <div className="w-full flex items-center justify-between lg:hidden">

                    <CarouselButton iconName="arrow-back" scroll={scrollLeft} setIndex={setIndex} />

                    <div className="flex gap-2">

                        {posts.map((post, i) => (

                            <Indicator isActive={index === i} />

                        ))}

                    </div>

                    <CarouselButton iconName="arrow-forward" scroll={scrollRight} setIndex={setIndex} />

                </div>
            </div>
        </section>
    )
}