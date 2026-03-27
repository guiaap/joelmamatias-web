import { Link } from "react-router-dom";
import Logo from "../ui/Logo.jsx";
import Icon from "../ui/Icon.jsx";
import { useState, useEffect } from "react";
import { MenuContext } from "../../contexts/MenuContext.js";
import { useContext } from "react";

export function MenuItem({to, text}) {

    const { isOpen, setIsOpen } = useContext(MenuContext);

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

export function Menu() {

    const { isOpen, setIsOpen } = useContext(MenuContext);

    return (

        <ul className={`
            absolute lg:static
            top-18.5 left-0 
            w-full lg:w-auto
            flex flex-col lg:flex-row
            lg:gap-3
            bg-(--primary-brown) lg:bg-(--transparent)
            transition-all duration-300

            ${ isOpen 
                ? "max-h-75 pt-3 pb-5 px-5 opacity-100" 
                : "max-h-0 overflow-hidden opacity-0"
            }
            
            lg:max-h-75 
            lg:opacity-100
        `}>

            <MenuItem to="/#start" text="Início" />
            <MenuItem to="/#about" text="Sobre Mim" />
            <MenuItem to="/#services" text="Serviços" />
            <MenuItem to="/#products" text="Produtos" />
            <MenuItem to="/#blog" text="Blog" />
            <MenuItem to="/#contact" text="Contato" />

        </ul>
    );
}

export function MenuButton() {

    const { isOpen, setIsOpen } = useContext(MenuContext);
    
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

export function HeaderWhatsappButton() {

    return (

        <a 
            href="https://wa.me/47991181188" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir para a conversa por WhatsApp"
            className="
                hidden lg:flex 
                gap-2 items-center
                px-4 py-2
                border border-(--white) 
                transition-colors duration-300
                [&>svg]:transition-colors [&>svg]:duration-300

                hover:border-(--primary-gold) 
                hover:text-(--primary-gold)
                hover:[&>svg]:fill-(--primary-gold)
        ">

            <Icon name="whatsapp" size="20px" />  

            <span className="text-[0.9rem] uppercase tracking-widest">
                Vamos Conversar
            </span>

        </a>
    );

}

export default function Header() {

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
            sticky xl:fixed 
            top-0 z-50
            w-full max-w-(--master-container) 
            bg-(--primary-brown)
            transition-colors duration-300
            ${isScrolled ? "lg:bg-(--transparent-primary-brown)" : "xl:bg-transparent"}
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

                <MenuContext.Provider value={{ isOpen, setIsOpen }}>
                    <Menu />
                    <MenuButton />
                </MenuContext.Provider>

                <HeaderWhatsappButton />
                
            </nav>

        </header>
    );
}