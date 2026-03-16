import SectionTag from "./SectionTag.jsx";
import SectionTitle from "./SectionTitle.jsx";
import Icon from "./Icon.jsx";

import instagram from "../assets/images/instagram.png";

export function ContactForm() {

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            message
        };

        await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }

    return (

        <form 
            onSubmit={handleSubmit}
            className="
            flex-1 p-5 md:p-8
            w-full max-w-[650px] 
            bg-[#FFFFFF05]
            border border-[#FFFFFF20]

            [&>div]:flex [&>div]:flex-col [&>div]:gap-2
            [&>div]:mb-6

            [&>div>label]:text-(--transparent-white-smooth)
            [&>div>label]:text-[0.8rem]
            [&>div>label]:tracking-widest
            [&>div>label]:uppercase

            [&>div>input,textarea]:border-2 
            [&>div>input,textarea]:border-[#FFFFFF20]
            [&>div>input,textarea]:bg-[#FFFFFF10]
            [&>div>input,textarea]:text-(--white)
            [&>div>input,textarea]:transition-all
            [&>div>input,textarea]:duration-500
            [&>div>input,textarea]:px-3 [&>div>input,textarea]:py-3
            [&>div>input::placeholder,textarea::placeholder]:text-[#FFFFFF70]
            [&>div>input::placeholder,textarea::placeholder]:text-[0.9rem]
            [&>div>input::placeholder,textarea::placeholder]:font-light
            [&>div>input:focus,textarea:focus]:outline-none
            [&>div>input:focus,textarea:focus]:border-2
            [&>div>input:focus,textarea:focus]:border-(--primary-gold)
        ">

            <div>

                <label htmlFor="name">Nome</label>

                <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="Seu nome completo"
                    required 
                />

            </div>

            <div>
                <label htmlFor="email">E-mail</label>

                <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="Seu e-mail" 
                    required
                />

            </div>

            <div>
                <label htmlFor="message">Mensagem</label>
                <textarea 
                    id="message"
                    name="message"
                    placeholder="Como posso ajudar?"
                    className="resize-none h-[160px]"
                />
                
            </div>

            <input 
                type="submit" 
                value="Enviar Mensagem" 
                className="
                block w-full py-3
                uppercase tracking-widest
                text-[0.9rem]
                bg-(--primary-gold)
                cursor-pointer
                transition-all duration-300
                hover:bg-(--secondary-gold)
                hover:-translate-y-[5px]
            "/>
            </form>
    );
}

export default function ContactSection() {

    return (

        <section 
            id="contact" c
            className="bg-(--primary-brown)
            
        ">

            <div className="flex flex-col lg:flex-row items-start justify-between gap-10 max-w-(--container) mx-auto">

                <div className="text-(--transparent-white-smooth) max-w-[700px] flex-1">

                    <SectionTag text="Fale Comigo" />

                    <SectionTitle
                        text1="Entre em " text2="contato"
                        color1="--white" color2="--primary-gold"
                     />

                     <p className="text-[1rem]">
                        Pronta para ajudar sua empresa a organizar processos, garantir conformidade e alcançar resultados práticos.
                        Preencha o formulário ou use um dos canais abaixo.
                    </p>

                    <div className="h-[1px] w-[50px] my-8 bg-(--transparent-white-smooth)" />

                    <h3 className="uppercase text-[0.8rem] tracking-widest mb-5">
                        Siga-me
                    </h3>

                    <a 
                        href="https://www.instagram.com/jm.gestaointeligente/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 mb-8
                    ">
                        <img 
                            src={instagram} 
                            alt="Logo do Instagram" 
                            className="w-10 h-10"
                        />

                        <span>
                            @jm.gestaointeligente
                        </span>
                    </a>


                    <h3 className="uppercase tracking-widest text-[0.8rem] mb-5">
                        Outras formas de contato
                    </h3>

                    <ul className="
                        flex flex-col gap-2 mb-8
                        [&>li]:flex [&>li]:gap-2 [&>li]:items-center
                        [&>li>svg]:fill-(--transparent-white-smooth)
                    ">
                        <li>
                            <Icon name="mail" />
                            <span>comercial@joelmamatias.com.br</span>
                        </li>
                        <li>
                            <Icon name="phone" />
                            <span>(47) 99118-1188</span>
                        </li>
                    </ul>

                    <a 
                        href="https://wa.me/47991181188" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        block w-fit
                        uppercase tracking-widest
                        text-[0.8rem] text-(--green)
                        py-3 px-5
                        border border-(--transparent-green-smooth)
                        transition-colors duration-300
                        hover:bg-(--transparent-green-strong)
                        hover:border-(--green)
                    ">
                        Entrar em contato via WhatsApp
                    </a>
                </div>

               <ContactForm />

            </div>

        </section>
    );
}