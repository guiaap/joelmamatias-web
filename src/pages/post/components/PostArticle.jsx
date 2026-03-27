import { useContext } from "react";
import { PostContext } from "../../../contexts/PostContext.js";
import { useInView } from "../../../hooks/useInView.js";

export function PostParagraph({text, isLead = false, isTip = false}) {

    const { ref, isVisible } = useInView();

    return (

        <p 
            ref={ref}
            className={`
                mb-5 
                text-[clamp(0.9rem,2vw,1rem)]
                transition-all duration-700
                ${ isLead && `
                    italic 
                    border-l-2 border-(--primary-gold)
                    pl-3
                `}
                ${
                    isTip && `
                        p-2
                        bg-(--transparent-bright-gold)
                        border border-(--transparent-gold)
                    `
                }
                ${ isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0" }
            `}> 
            { isTip && <span className="font-bold">💡Dica: </span> }
            {text}
        </p>
    )
}

export function PostSubtitle({text}) {

    const { ref, isVisible } = useInView();

    return (

        <h2 
            ref={ref}
            className={`
                mt-3 mb-3
                text-[clamp(1.3rem,5vw,1.9rem)]
                font-cormorant font-bold
                transition-all duration-700

                after:content-['']
                after:block after:mt-1
                after:w-10 after:h-px 
                after:bg-(--transparent-gold)

                ${ isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0" }
            `}>
            {text}
        </h2>
            
    )
}

export function PostDivider() {

    return (
        <hr className="
            block my-8 
            h-px bg-(--transparent-gold)
            border-none
        "/>
    )
}

export function PostListItem({text}) {

    return (

        <li className="
            relative flex pl-3
            text-[clamp(0.9rem,2vw,1rem)]

            before:content-['']
            before:absolute before:left-0 before:top-3
            before:inline-block
            before:w-1 before:h-1
            before:rounded-full
            before:bg-(--dark-gold)
            before:mr-2 before:my-auto

        ">
            {text}
        </li>
    );
    
}

export default function PostArticle() {

    const { post } = useContext(PostContext);
    const { ref, isVisible } = useInView();

    return (

        <article className="max-w-(--container-medium)">
            {post.content.map(item => {

                switch(item.type) {

                    case "paragraph":
                        return <PostParagraph text={item.text} />;

                    case "lead-paragraph":
                        return <PostParagraph text={item.text} isLead={true} />;

                    case "tip-paragraph":
                        return <PostParagraph text={item.text} isTip={true} />;
                    
                    case "subtitle":
                        return <PostSubtitle text={item.text} />;

                    case "divider":
                        return <PostDivider />

                    case "list":
                        return (
                            <ul 
                                ref={ref}
                                className={`
                                    mb-5
                                    transition-all duration-700

                                    ${ isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0" }
                                `}>
                                {item.items.map((i, index) => {
                                    return <PostListItem key={index} text={i} />
                                })}
                            </ul>
                        );

                    default:
                        return null;
                }
            })}
        </article>
    )
}