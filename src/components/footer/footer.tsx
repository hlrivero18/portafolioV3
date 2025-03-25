import style from "./footer.module.css"
import marca from "./img/marca.png"
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.header}>
                <div>
                    <h1 className={style.titulo}>¿Listo para trabajar juntos?
                        <br /><span>Contactame!.</span></h1>
                </div>
                <ul>
                    <li>
                        <Link to="/">Inicio.</Link>
                    </li>
                    <li>
                        <Link to="/aboutme">Acerca de mi.</Link>
                    </li>
                    <li>
                        <Link to="/proyect">Proyectos.</Link>
                    </li>
                    <li>
                        <Link to="/certifications">Certificaciones.</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experiencias.</Link>
                    </li>
                </ul>
                <div>
                    <figure>
                        <img src={marca} alt="" />
                    </figure>
                    <div className={style.rrss}>
                        <a target="_blank" href="https://www.linkedin.com/in/hector-luis-rivero-311578260/"><FaLinkedin /></a>
                        <a target="_blank" href="https://t.me/Mrsalitre"><FaTelegram /></a> 
                        <a target="_blank" href="https://github.com/hlrivero18"><FaGithub /></a> 
                    </div>
                </div>
            </div>
            <p className={style.reservado}>© 2025 - Portafolio Web Hector Luis Rivero</p>
        </footer>
    );
}

export default Footer; 