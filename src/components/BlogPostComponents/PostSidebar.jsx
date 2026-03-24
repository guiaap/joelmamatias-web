import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../contexts.js";

export function AuthorCard() {

    return (

        <div className="
            w-75 h-fit p-5 
            bg-(--primary-brown)
            shadow-md
        ">

            <div className="
                flex items-center gap-3
                text-[1.1rem]
                font-cormorant font-bold
            ">

                <div className="
                    flex items-center justify-center
                    w-10 h-10
                    text-[1.2rem]
                    rounded-full
                    bg-(--primary-gold)
                ">
                    JM
                </div>

                <div className="flex flex-col leading-tight">

                    <span className="
                        font-cormorant text-(--white)
                        text-[1.2rem]
                    ">
                        Joelma Matias
                    </span>

                    <span className="
                        text-(--primary-gold) 
                        font-dm text-[0.7rem]
                        uppercase
                    ">
                        Especialista em DP & SST
                    </span>

                </div>

            </div>

            <p className="
                text-(--transparent-white-smooth)
                text-[0.9rem]
                mt-5
            ">
                Administradora com 15+ anos em Departamento Pessoal, Perita e Administradora Judicial 
                registrada no CRA-SC.
            </p>


        </div>
    )
}

export function RelatedProductCard() {

    return (

        <div className="
            w-75 p-5 
            bg-(--transparent-bright-gold)
            border border-(--transparent-gold)
            shadow-md
        ">

            <div className="
                uppercase tracking-widest
                py-1 px-2 mb-5
                text-[0.8rem] text-(--dark-gold)
                font-bold 
                border border-(--primary-gold)
                bg-(--transparent-gold)
            ">
                Produto Relacionado
            </div>

            <div className="
                flex items-center justify-center
                h-20 mb-3
                bg-(--transparent-gold)
                border border-(--primary-gold)
            ">
                Aguardando Aplicação
            </div>

            <h3 className="font-cormorant font-bold text-[1.2rem]">
                Guia Completo 2026
            </h3>

            <p className="text-[0.8rem]">
                E-book com todos os grupos, eventos e prazos atualizados.
            </p>

            <div className="mt-3 flex justify-between">

                <span className="
                    font-cormorant font-bold
                    text-[1.4rem]
                ">
                    R$ 47,90
                </span>

                <Link 
                    to="/"
                    className="
                        flex items-center
                        py-1 px-2
                        uppercase tracking-widest
                        text-[0.8rem] font-bold
                        bg-(--transparent-gold)
                        border border-(--primary-gold)
                        transition-all duration-300
                        hover:bg-(--bright-gold)
                        hover:shadow-[0px_0px_5px_var(--bright-gold)]

                ">
                    Comprar
                </Link>
                
            </div>

        </div>
    )

}

export function RelatedPostsItem({id, image, category, title}) {

    

    return (

        <li>
            <Link 
                to={`/blogpost/${id}`}
                className="
                    flex gap-2 
                    py-3 px-1
                    border-b border-(--transparent-gold)
                    transition-colors duration-300
                    hover:bg-(--transparent-bright-gold)
                ">

                <img
                    src={image}
                    alt=""
                    className="
                        h-15 w-18
                        object-cover
                        border border-(--primary-gold)
                    "/>
                
                <div className="flex flex-col">

                    <span className="
                        uppercase tracking-widest
                        text-(--primary-gold)
                        text-[0.8rem]
                    ">
                        {category}
                    </span>

                    <span className="
                        text-[1rem]
                        font-cormorant font-bold
                    ">
                        {title}
                    </span>

                </div>
            </Link>

        </li>
    )
}

export function RelatedPostsCard() {

    const { previousPost, nextPost } = useContext(PostContext);

    return (

        <div className="w-75">
            <div className="
                    uppercase tracking-widest
                    py-1 px-2 mb-2
                    text-[0.8rem] text-(--primary-gold)
                    font-bold
                    border border-(--primary-gold)
                    bg-(--transparent-bright-gold)
                ">
                    Posts Relacionados
            </div>

            <ul>
                {previousPost && (
                    <RelatedPostsItem
                        key={previousPost.id}
                        id={previousPost.id}
                        image={previousPost.image}
                        category={previousPost.category}
                        title={previousPost.title}
                    />
                )}

                {nextPost && (
                    <RelatedPostsItem
                        key={nextPost.id}
                        id={nextPost.id}
                        image={nextPost.image}
                        category={nextPost.category}
                        title={nextPost.title}
                    />
                )}
            </ul>
        </div>
    )
}

export default function PostSidebar() {

    return (

        <aside className="
            min-w-75 mx-auto pb-10 lg:py-10
            flex flex-col lg:flex-row xl:flex-col gap-5
        ">
            <AuthorCard />
            <RelatedProductCard />
            <RelatedPostsCard />
        </aside>
    )
}