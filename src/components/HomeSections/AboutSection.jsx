import SectionTag from "../SectionTag.jsx";
import Icon from "../Icon.jsx";
import SectionTitle from "../SectionTitle.jsx";
import { HookButton } from "./HeroSection.jsx";
import { useInView } from "../../hooks/useInView.js";


import photo from "../../assets/images/joelma.jpeg";

export function Avatar() {

    const { ref, isVisible } = useInView();

    return (

        <figure 
            ref={ref}
            className={`
                relative 
                h-100 w-auto
                lg:h-120 lg:w-90 
                transition-all duration-700
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}

                after:content-['']
                after:w-full after:h-full
                after:border after:border-(--primary-gold)
                after:absolute
                after:-top-2.5 after:-left-2.5
        `}>

            <img 
                src={photo} 
                alt="Foto de Joelma Matias" 
                className="
                    relative z-5
                    w-full h-full
                    object-cover
                    shadow-md
            "/>

        </figure>
    )

}

export function Diferential({iconName, iconColor, text, textColor, bgColor}) {

    return (

        <li className={`
            flex items-center gap-1 
            px-6 py-3 
            text-(${textColor}) bg-(${bgColor})   
            bg-(--dark-gold)
        `}>
           <Icon name={iconName} color={iconColor} /> {text}
        </li>
    )
}

export function Diferentials() {

    return (

        <ul className="absolute -bottom-1/6 -right-1/30 z-20 flex flex-col gap-1">

            <Diferential 
                iconName="person" 
                text="Atendimento Humanizado" 
                textColor="--white" 
                bgColor="--primary-gold" 
            />

            <Diferential 
                iconName="bolt" 
                text="Agilidade" 
                textColor="--white"  
                bgColor="--dark-gold"
            />

            <Diferential 
                iconName="calendar"  
                text="+20 Anos de Experiência" 
                textColor="--white"  
                bgColor="--primary-brown" 
             />

        </ul>

    );
}

export function Initials() {

    return (
        <span className="
            inline-block
            absolute top-0 right-0 
            -translate-y-1/6 translate-x-1/16
            font-cormorant font-bold
            text-[clamp(10rem,19vw,18rem)]
            uppercase text-(--primary-gold)
            leading-none
            opacity-10
            pointer-events-none select-none
        ">
            JM
        </span>
    )
}

export function Catchphrase() {

    return (

        <p className="
            font-cormorant italic 
            text-[clamp(1.4rem,2vw,1.6rem)]
            pl-3 
            border-l-2 border-(--dark-gold)
        ">
            "Do planejamento à execução — com organização, conformidade e resultados práticos."
        </p>
    )
}

export default function AboutSection() {

    const { ref, isVisible } = useInView();

    return (

        <section id="about">

            <div className="
                flex flex-col lg:flex-row
                items-center justify-between gap-8
                max-w-(--container-large) mx-auto  
            ">

                <div className="relative order-2 lg:order-1">
                    <Avatar />
                    <Diferentials />
                </div>

                <article 
                    ref={ref}
                    className="
                        relative 
                        justify-center order-1 lg:order-2 
                        max-w-162.5  
                ">

                    <SectionTag text="Quem sou eu" color="--primary-brown" />

                    <SectionTitle 
                        text1="Sobre " text2="mim" 
                        color1="--primary-brown" color2="--primary-gold"
                    />

                    <Initials />

                    <div className={`
                            flex flex-col gap-5 
                            mb-8 
                            text-[clamp(1rem,2vw,1.1rem)]
                            transition-all duration-300
                            ${isVisible ? "opacity-100" : "opacity-0" }
                    `}>

                        <p>
                            Sou formada em Administração de Empresas e pós-graduada em Gestão Estratégica de Pessoas.
                            Complemento minha atuação com especializações em Segurança do Trabalho, Gestão de Cargos e
                            Salários, Gestão de Contratos, Programação Neurolinguística (PNL) e Administração de Condomínios.
                        </p>

                        <p>
                            Atuo há mais de 20 anos na área administrativa, com foco de 15+ anos em Departamento Pessoal.
                            Tenho experiência sólida nos setores de construção civil e eletromecânica,
                            onde desenvolvi expertise em gestão de pessoas, processos e segurança do trabalho.
                        </p>

                        <Catchphrase />

                        <p>
                            Também sou Administradora Judicial e Perita registrada no CRA-SC,
                            o que amplia minha visão técnica e jurídica para apoiar empresas em decisões
                            seguras e eficientes
                        </p>

                        <ul className="
                            flex flex-col gap-2 leading-tight

                            [&>li]:flex [&>li]:items-center

                            [&>li]:before:inline-block
                            [&>li]:before:content-[' ']
                            [&>li]:before:w-2.5 [&>li]:before:h-0.5
                            [&>li]:before:mr-2
                            [&>li]:before:bg-(--primary-gold)
                        ">
                            <li>Atendimento próximo e humanizado.</li>
                            <li>Processos claros, com rotinas e indicadores.</li>
                            <li>Entregas objetivas e aplicáveis no dia a dia.</li>
                        </ul>
                    </div>


                    <HookButton
                        to="/#contact"
                        text="Entre em contato"
                        ariaLabel="Ir para a seção de Contato"
                    />

                </article>
        
            </div>

        </section>
    )
}