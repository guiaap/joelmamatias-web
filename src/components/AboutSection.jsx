import SectionTag from "./SectionTag.jsx";
import { Link } from "react-router-dom";

import photo from "../assets/images/joelma.jpeg"

export function Avatar() {

    return (

        <div className="order-2 lg:order-1">

            <figure className="
            relative
            min-h-[200px] min-w-[200px]
            max-h-[500px] max-w-[500px] 
            border border-(--primary-gold)
            ">

                <img 
                src={photo} 
                alt="Foto de Joelma Matias" 
                className="
                w-full h-full
                object-cover
                shadow-md
                "/>

                <figcaption className="hidden">Foto de Joelma Matias</figcaption>

            </figure>

            <div></div>
        </div>
    )

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

export default function AboutSection() {

    return (

        <section id="about">

            <div className="
            flex flex-col gap-10 
            items-center justify-between
            max-w-(--container) mx-auto

            lg:flex-row
            ">

                <Avatar />

                <article className="
                flex flex-col order-1 
                max-w-[650px]
                
                lg:order-2
                ">

                    <SectionTag text="Quem sou eu" color="--primary-brown" />

                    <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)]">
                        Sobre <span className="italic text-(--dark-gold)">mim</span>
                    </h2>

                    <div className="flex flex-col gap-5 mb-8 text-[clamp(1rem,2vw,1.1rem)]">

                        <p>Sou formada em Administração de Empresas e pós-graduada em Gestão Estratégica de Pessoas.
                            Complemento minha atuação com especializações em Segurança do Trabalho, Gestão de Cargos e
                            Salários, Gestão de Contratos, Programação Neurolinguística (PNL) e Administração de Condomínios.
                        </p>

                        <p>
                            Atuo há mais de 20 anos na área administrativa, com foco de 15+ anos em Departamento Pessoal.
                            Tenho experiência sólida nos setores de construção civil e eletromecânica,
                            onde desenvolvi expertise em gestão de pessoas, processos e segurança do trabalho.
                        </p>

                        <p className="
                        font-cormorant italic text-[clamp(1.4rem,2vw,1.8rem)] 
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