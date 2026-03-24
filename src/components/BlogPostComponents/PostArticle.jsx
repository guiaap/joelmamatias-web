import { useContext } from "react";
import { PostContext } from "../../contexts.js";
import { Separator } from "../HomeSections/ContactSection.jsx";

export function PostParagraph({text, isLead = false, isTip = false}) {

    return (

        <p className={`
            mb-5 
            text-[clamp(0.9rem,2vw,1rem)]
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
        `}> 
            { isTip && <span className="font-bold">💡Dica: </span> }
            {text}
        </p>
    )
}

export function PostSubtitle({text}) {

    return (

        <h2 className="
            mt-3 mb-3
            text-[clamp(1.3rem,5vw,1.9rem)]
            font-cormorant font-bold

            after:content-['']
            after:block after:mt-1
            after:w-10 after:h-px 
            after:bg-(--transparent-gold)
        ">
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
                            <ul className="mb-5">
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