


export function Logo() {

}

export function Menu() {

}

export function MenuButton() {

}

export function WhatsappButton() {

}

export default function Header() {

    return (
        <header className="fixed top z-100 h-[60px] bg-(--transparent-primary-brown)">
            <nav>
                <Logo />
                <Menu />
                <MenuButton />
                <WhatsappButton />
            </nav>
        </header>
    );
}