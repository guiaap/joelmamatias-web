import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";
import SectionTag from "../../../components/ui/SectionTag.jsx";
import { useInView } from "../../../hooks/useInView.js";

const images = [banner1, banner2, banner3];

export function Gradient() {

    return (

         <div className="
            absolute inset-0 z-5 
            bg-[linear-gradient(100deg,rgba(26,18,9,0.88)_0%,rgba(26,18,9,0.60)_55%,rgba(26,18,9,0.20)_100%)]"
        />

    );
}

export function DecorativeLine() {

    return (

        <div className="
            absolute top-1/2 right-1/2 z-10 
            -translate-x-1/2 -translate-y-1/2
            h-75 w-px
            bg-[linear-gradient(to_bottom,transparent,var(--primary-gold),transparent)]
        "/>
    );
}

export function HookButton({to = "/", ariaLabel, text, index = 0}) {

    const isEven = index % 2 === 0;

    const { ref, isVisible} = useInView();

    return (

        <Link
            ref={ref}
            to={to}
            aria-label={ariaLabel}
            className={`
                w-fit
                px-5 py-3
                text-[0.9rem] text-(--primary-brown)
                font-medium uppercase tracking-widest
                transition-all duration-700
                ${isVisible ? "opacity-100 translate-0" : "opacity-0 translate-y-10" }
                ${ isEven 
                    ? "bg-(--primary-gold) hover:bg-(--secondary-gold) hover:-translate-y-1.25"
                    : ` border border-(--transparent-white-strong) 
                        text-(--white) hover:text-(--secondary-gold) 
                        hover:border-(--primary-gold)`
                }
            `}> 
            {text}
        </Link>

    );
}

export default function HeroSection() {

    const [index, setIndex] = useState(0);

    const { ref, isVisible} = useInView();

    useEffect(() => {

        const interval = setInterval(() =>  {
            
            setIndex(prev => (prev + 1) % images.length)

        }, 4000)

        return () => clearInterval(interval);

    }, []);


    return (

        <section 
            id="start"
            className="
                relative 
                flex items-center justify-center 
                h-screen lg:max-h-230 
                overflow-hidden
            ">
            {images.map((img, i) => (

                <div 
                    key={i} 
                    style={{ backgroundImage: `url(${img})` }}
                    className={`
                        absolute inset-0
                        bg-center bg-cover
                        transition-opacity duration-1000
                        ${i === index ? "opacity-100" : "opacity-0"}
                `}/>
            ))}

            <Gradient />
            <DecorativeLine />
            
            <div className="
                z-15 
                flex flex-col gap-5 justify-start 
                w-(--container) text-(--white) 
            ">

                <SectionTag text="Especialista em Gestão Estratégica" />

                <h1 
                    ref={ref}
                    className={`
                        font-cormorant
                        text-[clamp(2.8rem,8vw,5.5rem)]
                        tracking-tight leading-none
                        transition-all duration-700
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-25"}
                `}>
                    Gestão estratégica, <br/> 
                    <span className="text-(--primary-gold) italic">segurança</span> e resultados.
                </h1>

                <p 
                    ref={ref}
                    className={`
                    max-w-(--container-small) 
                    text-[clamp(1rem,2vw,1.2rem)] 
                    text-(--transparent-white-smooth)
                    transition-all duration-1000
                    ${isVisible ? "opacity-100 translate-0" : "opacity-0 -translate-x-10" }    
                `}>
                    Soluções personalizadas em Administração, Departamento Pessoal, Segurança do Trabalho, 
                    Contratos e Gestão de Pessoas para empresas que buscam excelência e conformidade.
                </p>

                <div className="flex flex-col gap-3 md:flex-row ">

                    <HookButton 
                        to="/#services"
                        text="Conheça os Serviços"
                        ariaLabel="Ir para a seção de Serviços" 
                    />
                    <HookButton 
                        to="/#about"
                        text="Sobre mim"
                        ariaLabel="Ir para a seção Sobre Mim" 
                        index={1}
                    />
                    
                </div>

            </div>
        </section>
    )
}