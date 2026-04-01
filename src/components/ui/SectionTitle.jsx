import { useInView } from "../../hooks/useInView.js";

export default function SectionTitle({
    text1, text2, 
    color1 = "--primary-brown", 
    color2 = "--primary-gold"
}) {

    const { ref, isVisible } = useInView();

    return (

        <h2 
            ref={ref}
            style={{ color: `var(${color1})`}}
            className={`
                font-cormorant 
                text-[clamp(2.5rem,5vw,3.5rem)]
                leading-tight
                transition-all duration-700
                ${ isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
        `}>

            {text1}

            <span 
                style={{ color: `var(${color2})` }}
                className="italic">
                {text2}
            </span>

        </h2>
    )
}