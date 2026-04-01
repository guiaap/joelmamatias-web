import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView.js";

export default function HookButton({to = "/", ariaLabel, text, index = 0}) {

    const isEven = index % 2 === 0;

    const { ref, isVisible} = useInView();

    return (

        <Link
            ref={ref}
            to={to}
            aria-label={ariaLabel}
            className={`
                w-fit px-5 py-3
                text-[0.9rem] text-(--primary-brown)
                font-medium uppercase tracking-widest
                transition-all duration-500
                hover:shadow-(--bright-shadow)
                ${isVisible ? "opacity-100 translate-0" : "opacity-0 translate-y-10" }
                ${ isEven 
                    ? 
                    `bg-(--primary-gold) hover:bg-(--bright-gold) hover:-translate-y-1.25
                        `
                    : 
                    ` border-[1.2px] border-(--white) 
                    text-(--white) 
                    hover:text-(--secondary-gold) 
                    hover:text-shadow-(--bright-shadow)
                    hover:border-(--primary-gold)
                    `
                }
            `}> 
            {text}
        </Link>

    );
}