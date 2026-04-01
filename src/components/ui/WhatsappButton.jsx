import Icon from "./Icon.jsx";

export default function WhatsappButton() {

    return (

        <a 
            href="https://wa.me/47991181188"
            aria-label="Ir para a conversa por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="
                fixed
                bottom-8 right-8 z-50
                flex items-center justify-center
                
                h-13 w-13 md:h-14 md:w-14
                rounded-full 
                overflow-hidden
                bg-(--green)
                shadow-[0_0_5px_var(--green)]
                transition-all duration-300

                hover:-translate-y-1.25
                hover:shadow-[0_0_10px_var(--green)]
            ">
                <Icon name="whatsapp" size="30px" /> 
         </a>

    );
}