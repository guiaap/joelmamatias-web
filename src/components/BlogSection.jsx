import SectionTag from "./SectionTag.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { useRef } from "react";

import post1Image from "../assets/images/post1-image.png";
import post2Image from "../assets/images/post2-image.jpg";
import post3Image from "../assets/images/post3-image.jpg";

const posts = [
    {
        image: post1Image,
        alt: "Imagem representando o Post",
        date: "04 de Novembro de 2025",
        title: "eSocial 2025: novidades, integração e gestão inteligente",
        description: "O ano de 2025 trouxe mudanças importantes no eSocial, que vão impactar diretamente empresas, profissionais de contabilidade e departamentos de pessoas."
    },
    {
        image: post2Image,
        alt: "Imagem representando o Post",
        date: "04 de Setembro de 2025",
        title: "A Importância da Documentação Correta para a Segurança da Empresa",
        description: "No dia a dia corporativo, a documentação é muito mais do que burocracia: ela é a base que sustenta a organização e a segurança jurídica."
    },
    {
        image: post3Image, 
        alt: "Imagem representando o Post",
        date: "04 de Setembro de 2025",
        title: "A Importância do Treinamento para o Sucesso na Execução das Atividades",
        description: "No ambiente corporativo atual, marcado por mudanças rápidas, o treinamento deixou de ser diferencial e passou a ser necessidade estratégica."
    },
];

export function BlogCard({image, alt, date, title, description}) {

    return (

        <article 
        style={{ scrollSnapAlign: "start" }}
        className="
            min-w-[300px] 
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
                className="h-[200px] md:h-[250px] w-full object-cover"
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
            </div>

        </article>
    );
}

export default function BlogSection() {

    const carouselRef = useRef();

    function scrollLeft() {
        carouselRef.current.scrollBy({
        left: -320,
        behavior: "smooth"
        });
    }

    function scrollRight() {
        carouselRef.current.scrollBy({
        left: 320,
        behavior: "smooth"
        });
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
                            image={post.image}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                         />
                    ))}
                </div>
            </div>
        </section>
    )
}