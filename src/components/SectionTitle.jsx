import { useInView } from "../hooks/useInView.js";

export default function SectionTitle({text1, text2, color1, color2}) {

    const { ref, isVisible } = useInView();

    return (

        <h2 
            ref={ref}
            className={`
                font-cormorant 
                text-[clamp(2.5rem,5vw,3.5rem)]
                text-(${color1})
                leading-tight
                my-4
                transition-all duration-700
                ${ isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}
        `}>

            {text1}

            <span className={`text-(${color2}) italic`}>
                {text2}
            </span>

        </h2>
    )
}