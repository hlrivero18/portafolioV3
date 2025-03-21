import style from "./nav.module.css"
import logo from "../../../public/img/logo.png"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className={`${style.nav}`}>
            <figure className={`${style.logo}`}>
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>
            </figure>
            <ul className={`${style.containerList}`}>
                <li className={`${style.sub}`}>
                    <a href="aboutme">Acerca de mi</a>
                </li>
                <li className={`${style.sub}`}>
                    <a href="/proyect">  Proyectos</a>

                </li>
                <li className={`${style.sub}`}>
                    <a href="">Certificaciones</a>

                </li>
            </ul>
        </nav>
    )
}