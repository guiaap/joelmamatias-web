import { useState, useEffect } from "react";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";
import Tag from "../../../components/ui/Tag.jsx";
import HookButton from "../../../components/ui/HookButton.jsx";
import { useInView } from "../../../hooks/useInView.js";

const images = [banner1, banner2, banner3];

export function HeroGradient() {

    return (

         <div className="absolute inset-0 z-5 bg-(image:--hero-gradient)"/>

    );
}

export function VerticalDivider() {

    return (

        <div className="
            absolute
            top-1/2 right-1/2 z-10 
            -translate-x-1/2 -translate-y-1/2
            h-75 w-px
            bg-(image:--vertical-gradient)
        "/>

    );
}

export default function HeroSection() {

    const [index, setIndex] = useState(0);

    const { ref, isVisible} = useInView();

    useEffect(() => {

        const interval = setInterval(() =>  {
            
            setIndex(prev => (prev + 1) % images.length);

        }, 4000)

        return () => clearInterval(interval);

    }, []);


    return (

        <section 
            id="start"
            className="
                relative 
                flex items-center justify-center 
                h-screen min-h-120 max-h-230 
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

            <HeroGradient />
            <VerticalDivider />
            
            <div className="z-15 w-(--container) text-(--white)">

                <Tag text="Especialista em Gestão Estratégica" />

                <h1 
                    ref={ref}
                    className={`
                        font-cormorant
                        text-[clamp(2.8rem,9vw,5.5rem)]
                        tracking-tight leading-none
                        text-shadow-(--bright-shadow)
                        transition-all duration-700
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-25"}
                `}>
                    Gestão estratégica, <br/> 
                    <span className="text-(--bright-gold) italic">segurança</span> e resultados.
                </h1>

                <p 
                    ref={ref}
                    className={`
                        max-w-(--container-small) my-5
                        text-[clamp(1rem,3vw,1.2rem)] 
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