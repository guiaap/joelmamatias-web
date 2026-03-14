import whatsapp from "../assets/images/whatsapp.png";

export default function WhatsappButton() {

    return (

        <a 
            href="https://wa.me/47991181188"
            aria-label="Ir para o WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-block
                fixed bottom-10 right-10 z-50
                h-[50px] w-[50px] md:h-[60px] md:w-[60px]
                rounded-full overflow-hidden
                shadow-[0_0_5px_var(--green)]
                transition-all duration-300
                hover:-translate-y-[5px]
                hover:shadow-[0_0_10px_var(--green)]
                
            ">

            <div className="
                h-full w-full
                flex items-center justify-center
                bg-(--green)
               
            ">

                <img
                    src={whatsapp}
                    alt="Logo do WhatsApp"
                    className="
                        object-cover
                        h-[90%] w-[90%]
                    "/>
            </div>

        </a>
    )
}