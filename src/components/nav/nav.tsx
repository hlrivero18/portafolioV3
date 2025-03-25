import style from "./nav.module.css"
import logo from "../../../public/img/logoNav.png"
import { Link } from "react-router-dom"
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react"

export default function Nav() {
    const [menu, setMenu] = useState(false);

    function openMenu() {
        setMenu(!menu);
    }

    return (
        <nav className={`${style.nav}`}>
            <figure className={`${style.logo}`}>
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>
            </figure>
            {/* version para escritorio */}
            <ul className={`${style.containerList}`}>
                <li className={`${style.sub}`}>
                    <Link to="aboutme">Acerca de mi</Link>
                </li>
                <li className={`${style.sub}`}>
                    <Link to="/proyect">  Proyectos</Link>

                </li>
                <li className={`${style.sub}`}>
                    <Link to="/certifications">Certificaciones</Link>
                </li>
                <li className={`${style.sub}`}>
                    <Link to="/experience">Experiencia</Link>
                </li>
            </ul>
            {/* version mobile */}
            <button onClick={openMenu} className={style.menu__Mobile}>
                {menu ? <IoClose /> : <IoMenu />}
            </button>
            {menu && 
            <div className={`${style.Open__Menu}`}>
                <ul className={`${style.containerListMobile}`}>
                    <li className={`${style.sub}`}>
                        <Link to="/" onClick={openMenu}>Inicio</Link>
                    </li>
                    <li className={`${style.sub}`}>
                        <Link to="aboutme" onClick={openMenu}>Acerca de mi</Link>
                    </li>
                    <li className={`${style.sub}`}>
                        <Link to="/proyect" onClick={openMenu}>  Proyectos</Link>
                    </li>
                    <li className={`${style.sub}`}>
                        <Link to="/certifications" onClick={openMenu}>Certificaciones</Link>
                    </li>
                    <li className={`${style.sub}`}>
                        <Link to="/experience" onClick={openMenu}>Experiencia</Link>
                    </li>
                </ul>
            </div>}

        </nav>
    )
}