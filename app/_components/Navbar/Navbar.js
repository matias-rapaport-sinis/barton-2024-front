import Image from 'next/image';




function NavbarItem({ content, href }) {
    return (
        <li className="nav-item px-3">
            <a className="nav-link  text-color-barton active font-barton" aria-current="page" href={href}>
                {content}
            </a>
        </li>

    );
}

function DropdownItem({ content, href }) {
    return (
        <li><a className="dropdown-item" href={href}>{content}</a></li>
    )
}

function NavbarItemDropdown({ content, children }) {
    return (
        <li className="nav-item px-3 dropdown">
            <a className="nav-link dropdown-toggle active text-color-barton font-barton" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {content}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {children}
            </ul>
        </li>

    );
}

function NavbarItemIcon({icon, alt}) {
    return (
        <li className="nav-item px-3">
            <a className="nav-link">
                <Image
                    src={icon}
                    alt={alt}
                    width={38}
                    height={34}
                />
            </a>
        </li>

    );
}
export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color-barton ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image
                        src={"/logo.png"}
                        alt="Logo de Barton"
                        width={206}
                        height={86}
                    />
                </a>
               
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">

                        <NavbarItemDropdown content="Producto">
                            <DropdownItem content="item1" href="#" />
                            <DropdownItem content="item2" href="#" />
                            <DropdownItem content="item3" href="#" />
                        </NavbarItemDropdown>

                        <NavbarItemDropdown content="Aplicaciones">
                            <DropdownItem content="item1" href="#" />
                            <DropdownItem content="item2" href="#" />
                            <DropdownItem content="item3" href="#" />
                        </NavbarItemDropdown>

                        <NavbarItem content="Documentacion" href="#" />
                        <NavbarItem content="Contacto" href="#" />

                        <NavbarItemIcon icon="/icono-changuito.png" alt="Icono de chango" />
                    </ul>
                </div>
            </div>
        </nav>

    );
}