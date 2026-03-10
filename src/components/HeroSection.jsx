import { useEffect, useState } from "react";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import SectionTag from "./SectionTag.jsx";
import { Link } from "react-router-dom";

export function Gradient() {

    return (

         <div className="absolute inset-0 z-5 bg-[linear-gradient(100deg,rgba(26,18,9,0.88)_0%,rgba(26,18,9,0.60)_55%,rgba(26,18,9,0.20)_100%)]"/>
    );
}

export function DecorativeLine() {

    return (

        <div className="
        absolute top-1/2 right-1/2 z-10 
        -translate-x-1/2 -translate-y-1/2
        h-[400px] w-[1px]
        bg-[linear-gradient(to_bottom,transparent,var(--primary-gold),transparent)]
        "/>
    );
}

export function ServicesButton() {

    return (

        <Link to="/#services"
        aria-label="Ir para a seção de Serviços"
        className="
            w-fit
            uppercase tracking-widest 
            text-[0.9rem] text-(--primary-brown)
            font-medium
            px-5 py-3 bg-(--primary-gold) 
            transition-all duration-300
            hover:bg-(--secondary-gold)
            hover:-translate-y-[5px]
        ">
            Conheça os Serviços
        </Link>

    );
}

export function AboutButton() {

    return (

        <Link to="/#about"
        aria-label="ir para a seção Sobre Mim"
        className="
            w-fit
            uppercase tracking-widest 
            text-[0.9rem] 
            font-medium
            px-5 py-3
            border boder-(--transparent-white-strong)
            transition-colors duration-300
            hover:text-(--secondary-gold)
            hover:border-(--primary-gold)
        ">
            Sobre Mim
        </Link>
    );
}

const images = [banner1, banner2, banner3];

export default function HeroSection() {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() =>  {
            
            setIndex(prev => (prev + 1) % images.length)

        }, 4000)

        return () => clearInterval(interval);

    }, []);


    return (

        <section id="start"
        className="relative flex items-center justify-center md:h-screen md:max-h-[900px] overflow-hidden">
            {images.map((img, i) => (

                <div key={i} 
                className={`
                    absolute inset-0
                    bg-center bg-cover
                    transition-opacity duration-1000
                    ${i === index ? "opacity-100" : "opacity-0"}
                `}
                style={{ backgroundImage: `url(${img})` }}
                />
            ))}

            <Gradient />
            <DecorativeLine />
            
            <div className="
            z-15 
            flex flex-col gap-5 justify-start 
            w-(--container-large) text-(--white) 
            ">

                <SectionTag text="Especialista em Gestão Estratégica" />

                <h1 className="
                font-cormorant 
                text-[clamp(2.8rem,6vw,7rem)]
                tracking-tight leading-none
                ">
                    Gestão estratégica, <br/> 
                    <span className="text-(--primary-gold) italic">segurança</span> e resultados.
                </h1>

                <p className="max-w-(--container-small) text-[clamp(1rem,2vw,1.2rem)] text-(--transparent-white-smooth)">
                Soluções personalizadas em Administração, Departamento Pessoal, Segurança do Trabalho, 
                Contratos e Gestão de Pessoas para empresas que buscam excelência e conformidade.
                </p>

                <div className="flex flex-col gap-3 md:flex-row ">
                    <ServicesButton />
                    <AboutButton />
                </div>

            </div>
        </section>
    )
}