import Icon from "../ui/Icon.jsx";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <footer className="p-5 bg-(--darker-brown)">

            <div className="
                max-w-(--container) mx-auto
                flex flex-col md:flex-row
                items-center justify-center md:justify-between
                gap-2
                text-(--transparent-white-smooth)
                text-[0.7rem] 
            ">

                <p className="
                    flex items-center gap-1 
                    [&>svg]:fill-(--transparent-white-smooth)
                ">
                    <Icon name="copyright" size="17px" />
                    <span>{currentYear} Joelma Matias. Todos os direitos reservados.</span>
                </p>

                <a 
                    href="https://gamaral.com.br"
                    aria-label="Ir para o site do desenvolvedor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        transition-colors duration-300
                        hover:text-(--bright-gold)
                    ">
                    Site desenvolvido por G. Amaral
                </a>
                
            </div>

        </footer>

    );
}