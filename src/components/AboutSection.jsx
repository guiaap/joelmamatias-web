import SectionTag from "./SectionTag.jsx";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import SectionTitle from "./SectionTitle.jsx";

import photo from "../assets/images/joelma.jpeg";

export function Avatar() {

    return (

        <figure className="relative max-h-[400px] max-w-[400px] ">

            <img 
            src={photo} 
            alt="Foto de Joelma Matias" 
            className="
            relative z-10
            w-full h-full
            object-cover
            shadow-md
            "/>

            <div className="
            absolute top-[-10px] left-[-10px]
            w-full h-full
            border border-(--primary-gold)
            "/>

        </figure>
    )

}

export function Diferential({iconName, iconColor, text, textColor, bgColor}) {

    return (

        <li className={`
        flex items-center gap-1 
        px-6 py-3 
        text-(${textColor}) bg-(--dark-gold) bg-(${bgColor})
        `}>
           <Icon name={iconName} color={iconColor} /> {text}
        </li>
    )
}

export function Diferentials() {

    return (

        <ul className="absolute -bottom-1/4 -right-1/25 z-20 flex flex-col gap-1">

            <Diferential iconName="person" text="Atendimento Humanizado" textColor="--white" bgColor="--primary-brown" />
            <Diferential iconName="bolt" text="Agilidade" textColor="--white"  />
            <Diferential iconName="calendar" iconColor="#FFFFF" text="+20 Anos de Experiência" bgColor="--primary-gold"  />

        </ul>

    );
}

export function ContactButton() {

    return (

        <Link to="/#contact"
        className="
        inline-block w-fit 
        px-6 py-3
        uppercase
        bg-(--primary-gold)
        transition-colors duration-300
        hover:bg-(--secondary-gold)
        ">
            Entre em contato
        </Link>
    )
}

export function Initials() {

    return (
        <span className="
        inline-block
        absolute top-0 right-0 
        -translate-y-1/6 translate-x-1/16
        font-cormorant font-bold
        text-[clamp(10rem,20vw,21rem)]
        uppercase text-(--primary-gold)
        leading-none
        opacity-10
        pointer-events-none select-none
        ">
            JM
        </span>
    )
}

export default function AboutSection() {

    return (

        <section id="about">

            <div className="
            flex flex-col
            items-center justify-between gap-10
            max-w-(--container-large) mx-auto

            lg:flex-row
            ">

                <div className="relative order-2 lg:order-1">
                    <Avatar />
                    <Diferentials />
                </div>

                <article className="relative justify-center order-1 lg:order-2 max-w-[650px]">

                    <SectionTag text="Quem sou eu" color="--primary-brown" />

                    <SectionTitle 
                        text1="Sobre " text2="mim" 
                        color1="--primary-brown" color2="--primary-gold"
                    />

                    <Initials />

                    <div className="flex flex-col gap-5 mb-8 text-[clamp(1rem,2vw,1.1rem)]">

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

                        <p className="
                        font-cormorant italic text-[clamp(1.4rem,2vw,1.6rem)]
                        pl-3 border-l-[2px] border-(--dark-gold)
                        ">
                            "Do planejamento à execução — com organização, conformidade e resultados práticos."
                        </p>

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
                        [&>li]:before:w-[10px] [&>li]:before:h-[2px]
                        [&>li]:before:mr-2
                        [&>li]:before:bg-(--primary-gold)
                        ">
                            <li>Atendimento próximo e humanizado.</li>
                            <li>Processos claros, com rotinas e indicadores.</li>
                            <li>Entregas objetivas e aplicáveis no dia a dia.</li>
                        </ul>
                    </div>


                    <ContactButton />

                </article>
        
            </div>

        </section>
    )
}