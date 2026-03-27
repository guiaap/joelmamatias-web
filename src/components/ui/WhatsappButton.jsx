import whatsapp from "../../assets/images/whatsapp.png";

export default function WhatsappButton() {

    return (

        <a 
            href="https://wa.me/47991181188"
            aria-label="Ir para a conversa por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="
                flex items-center justify-center
                fixed 
                bottom-10 right-10 z-50
                h-12.5 w-12.5 md:h-15 md:w-15
                rounded-full 
                overflow-hidden
                bg-(--green)
                shadow-[0_0_5px_var(--green)]
                transition-all duration-300

                hover:-translate-y-1.25
                hover:shadow-[0_0_10px_var(--green)]
            ">

                <img
                    src={whatsapp}
                    alt="Logo do WhatsApp"
                    className="object-cover h-[90%] w-[90%]
                "/>
         </a>
    );
}