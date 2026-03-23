import SectionTag from "../SectionTag.jsx";
import SectionTitle from "../SectionTitle.jsx";
import Icon from "../Icon.jsx";

import instagram from "../../assets/images/instagram.png";

export function FormInput({
    as = "input",
    type = "text", 
    label, 
    name, 
    placeholder, 
    isRequired = false,
    value,
    ...rest
}) {
    if(as === "textarea") {

        return (

            <div className="flex flex-col gap-2 mb-6">

                <label
                    htmlFor={name}
                    className="
                        text-(--transparent-white-smooth)
                        text-[0.8rem]
                        uppercase tracking-widest
                ">
                    {label}
                </label>

                <textarea
                    name={name}
                    placeholder={placeholder}
                    required={isRequired}
                    className="
                        resize-none h-40
                        p-3
                        text-(--white)
                        bg-[#FFFFFF10]
                        border-2 border-[#FFFFFF20]
                        transition-all duration-300

                        placeholder:text-[#FFFFFF70]
                        placeholder:text-[0.9rem]
                        placeholder:font-light

                        focus:outline-none
                        focus:border-2 focus:border-(--primary-gold)
                    "
                    {...rest}
                />

            </div>
        )
    }

    return (

        <div className="flex flex-col gap-2 mb-6">

            <label 
                htmlFor={name}
                className="
                    text-(--transparent-white-smooth)
                    text-[0.8rem]
                    uppercase tracking-widest
            ">
                {label}
            </label>

            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                required={isRequired}
                value={value}
                className={`
                    p-3
                    text-[0.9rem]
                    transition-all duration-300

                    ${type === "submit" ? `
                        block w-full
                        uppercase tracking-widest
                        font-medium
                        bg-(--primary-gold)
                        cursor-pointer
                        hover:bg-(--secondary-gold)
                        hover:-translate-y-1.25
                    ` 
                    : `
                        text-(--white)
                        bg-[#FFFFFF10]
                        border-2 border-[#FFFFFF20]

                        placeholder:text-[0.9rem]
                        placeholder:font-light
                        placeholder:text-[#FFFFFF70]

                        focus:outline-none
                        focus:border-2 focus:border-(--primary-gold)
                    `}   
            `}/>

        </div>
    )
}

export function ContactForm() {

    return (

        <form 
            className="
                flex-1 
                p-5 pb-2 md:p-8 md:pb-3
                w-full max-w-162.5
                bg-[#FFFFFF05]
                border border-[#FFFFFF20]
        ">

                <FormInput 
                    type="text"
                    label="Nome"
                    name="name"
                    placeholder="Seu nome completo"
                    isRequired={true}
                />

                <FormInput 
                    type="email"
                    label="email"
                    name="email"
                    placeholder="Seu e-mail"
                    isRequired={true}
                />


                <FormInput 
                    as="textarea"
                    label="Mensagem"
                    name="message"
                    placeholder="Como posso te ajudar?"
                />

                <FormInput 
                    type="submit"
                    value="Enviar"
                />

            </form>
    );
}

export function Separator({width, color}) {

    return (
        <div 
            style={{ width: `${width}`, backgroundColor: `var(${color})` }}
            className="h-px my-5" />
    )
}

export function SocialMediaLink() {

    return (

        <a  
            href="https://www.instagram.com/jm.gestaointeligente/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 mb-8 w-fit
        ">
            <img 
                src={instagram} 
                alt="Logo do Instagram" 
                className="w-8 h-8"
            />

            <span>
                @jm.gestaointeligente
            </span>
        </a>

    )
}

export function OtherContactsItem({iconName, text}) {

    return (

        <li className="
            flex items-center gap-2
            [&>svg]:fill-(--transparent-white-smooth)
        ">  
            <Icon name={iconName} size="22px" />
            <span>{text}</span>
        </li>
    )
}

export function WhatsAppButton() {

    return (

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
        
    )
}

export default function ContactSection() {

    return (

        <section 
            id="contact"
            className="bg-(--primary-brown)
        ">

            <div className="
                flex flex-col lg:flex-row 
                items-start justify-between gap-10 
                max-w-(--container) mx-auto
            ">

                <div className="
                    max-w-175 flex-1
                    text-(--transparent-white-smooth)
                ">

                    <SectionTag text="Fale Comigo" />

                    <SectionTitle
                        text1="Entre em " text2="contato"
                        color1="--white" color2="--primary-gold"
                     />

                     <p className="text-[1rem]">
                        Pronta para ajudar sua empresa a organizar processos, garantir conformidade e alcançar resultados práticos.
                        Preencha o formulário ou use um dos canais abaixo.
                    </p>

                   <Separator width="20px" color="--bg-transparent-smooth" />

                    <h3 className="uppercase text-[0.8rem] tracking-widest mb-5">
                        Siga-me
                    </h3>

                    <SocialMediaLink />


                    <h3 className="uppercase tracking-widest text-[0.8rem] mb-5">
                        Outras formas de contato
                    </h3>

                    <ul className="flex flex-col gap-2 mb-8">

                        <OtherContactsItem iconName="mail" text="comercial@joelmamatias.com.br"  />
                        <OtherContactsItem iconName="phone" text="(47) 99118-1188"  />
                        
                    </ul>

                    <WhatsAppButton />

                </div>

               <ContactForm />

            </div>

        </section>
    );
}