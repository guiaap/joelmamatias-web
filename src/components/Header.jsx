import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Icon from "./Icon.jsx";
import { useState } from "react";


export function Logo() {

    return (

        <Link to="/" className="flex gap-2 items-center">

            <img src={logo} alt="Logo da Joelma Matias - Soluções"
            className="h-[40px] w-[40px]"/>

            <div className="flex flex-col leading-tight">

                <span className="text-[1.4rem] font-cormorant font-bold">
                    Joelma Matias
                </span>

                <span className="text-(--primary-gold) uppercase text-[0.7rem] tracking-widest">
                    Soluções Documentais
                </span>

            </div>

        </Link>

    );
}


export function MenuItem({text, to, setIsOpen}) {

    return (
        <li>
            <Link 
            to={to} 
            onClick={() => setIsOpen(false)}
            aria-label={`ir para a seção ${text}`}
            className="
            relative
            flex justify-center 
            p-1 
            uppercase text-[0.9rem] tracking-widest
            border-b border-b-(--transparent-white-strong)
            transition-all duration-300

            hover:text-(--primary-gold)

            after:content-[''] after:absolute
            after:bottom-0 after:left-0
            after:h-[1px] after:w-0
            after:bg-(--primary-gold)
            after:transition-all after:duration-300
            
            hover:after:w-[70%]

            lg:border-none
            ">
                {text}
            </Link>
        </li>
    );
}


export function Menu({isOpen, setIsOpen}) {

    return (
        <ul className={`
        transition-all duration-300
        absolute left-0 top-[74px]  
        w-full 
        flex flex-col gap-2
        bg-(--primary-brown) md:bg-(--transparent)
        ${ isOpen ? "max-h-[300px] pt-3 pb-5 px-5 opacity-100" : "max-h-0 overflow-hidden opacity-0"}
        

        lg:static
        lg:flex-row lg:gap-3
        lg:max-h-[300px] lg:w-auto
        lg:p-2
        lg:opacity-100
        `}>
            <MenuItem text="Início" to="/#start" setIsOpen={setIsOpen} />
            <MenuItem text="Sobre Mim" to="/#about" setIsOpen={setIsOpen} />
            <MenuItem text="Serviços" to="/#services" setIsOpen={setIsOpen} />
            <MenuItem text="Produtos" to="/#products" setIsOpen={setIsOpen} />
            <MenuItem text="Blog" to="/#blog" setIsOpen={setIsOpen} />
            <MenuItem text="Contato" to="/#contact" setIsOpen={setIsOpen} />

        </ul>
    );
}

export function MenuButton({isOpen, setIsOpen}) {
    
    return (
        <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`${isOpen ? "fechar" : "abrir"} menu de navegação`}
        className="lg:hidden"
        >
            <Icon name={ isOpen ? "close" : "menu"} />
        </button>
    )

}

export function WhatsappButton() {

    return (
        <a href="https://wa.me/47991181188" 
        target="_blank"
        aria-label="Ir para a conversa por WhatsApp"
        className="
        hidden lg:flex gap-2 items-center
        text-[0.9rem] uppercase tracking-widest
        border border-(--white) 
        px-4 py-2
        transiton-colors duration-300

        hover:border-(--primary-gold) 
        hover:text-(--primary-gold)

        [&>svg]:transiton-colors [&>svg]:duration-300
        hover:[&>svg]:fill-(--primary-gold)
        ">
          <Icon name="whatsapp" size="20px" />  
          <span>Vamos Conversar</span>
        </a>
    );

}

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <header className="
        sticky md:fixed top-0 z-1000
        w-screen
        max-w-(--master-container) 
        bg-(--primary-brown) md:bg-(--transparent)
        text-(--white)
        ">

            <nav className="
            relative
            max-w-(--container) 
            mx-auto 
            flex items-center justify-between 
            p-4 
            ">

                <Logo />
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
                <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                <WhatsappButton />
                
            </nav>

        </header>
    );
}