import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Icon from "./Icon.jsx";
import { useState, useEffect } from "react";


export function Logo() {

    return (

        <Link 
            to="/" 
            aria-label="Ir para a página inicial"
            className="flex gap-2 items-center">

            <img 
                src={logo} 
                alt="Logo da Joelma Matias Soluções Documentias"
                className="h-10 w-10"
            />

            <div className="flex flex-col leading-tight">

                <span className="text-[1.4rem] font-cormorant font-bold">
                    Joelma Matias
                </span>

                <span className="
                    text-[0.7rem] text-(--primary-gold) 
                    uppercase tracking-widest
                ">
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
                aria-label={`ir para a seção ${text}`}
                onClick={() => setIsOpen(false)}
                className="
                    relative
                    flex justify-center 
                    p-2 lg:p-1
                    text-[0.9rem] 
                    uppercase tracking-widest
                    border-b border-b-(--transparent-white-strong)
                    lg:border-none
                    transition-all duration-300
                    
                    hover:text-(--primary-gold)

                    after:content-[''] after:absolute
                    after:bottom-0 after:left-0
                    after:h-px after:w-0
                    after:bg-(--primary-gold)
                    after:transition-all after:duration-300
                    hover:after:w-[70%]
                ">
                {text}
            </Link>
        </li>
    );
}


export function Menu({isOpen, setIsOpen}) {

    return (

        <ul className={`
            absolute top-18.5 left-0 
            w-full 
            flex flex-col
            ${ isOpen 
                ? "max-h-75 pt-3 pb-5 px-5 opacity-100" 
                : "max-h-0 overflow-hidden opacity-0"
            }
            bg-(--primary-brown) lg:bg-(--transparent)
            transition-all duration-300
            lg:static
            lg:flex-row lg:gap-3
            lg:max-h-75 lg:w-auto
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
    );
}

export function WhatsappButton() {

    return (

        <a href="https://wa.me/47991181188" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir para a conversa por WhatsApp"
            className="
                hidden lg:flex 
                gap-2 items-center
                px-4 py-2
                border border-(--white) 
                transition-colors duration-300
                hover:border-(--primary-gold) 
                hover:text-(--primary-gold)
                [&>svg]:transition-colors [&>svg]:duration-300
                hover:[&>svg]:fill-(--primary-gold)
        ">

            <Icon name="whatsapp" size="20px" />  

            <span className="text-[0.9rem] uppercase tracking-widest">
                Vamos Conversar
            </span>

        </a>
    );

}

export default function Header({isMainLayout}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
       
        const handleListener = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleListener);

        return () => {
            window.removeEventListener("scroll", handleListener);
        };

    }, []);

    return (

        <header className={`
            ${ isMainLayout? "sticky xl:fixed" : "sticky"}
            top-0 z-50
            w-full max-w-(--master-container) 
            bg-(--primary-brown)
            transition-colors duration-300
            ${ isMainLayout 
                ? `${isScrolled ? "lg:bg-(--transparent-primary-brown)" : "xl:bg-transparent"}` 
                : "bg-(--primary-brown)"} 
        `}>
        
            <nav className="
                relative
                max-w-(--container) 
                mx-auto 
                flex items-center justify-between 
                p-4 
                text-(--white)
            ">

                <Logo />
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
                <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                <WhatsappButton />
                
            </nav>

        </header>
    );
}