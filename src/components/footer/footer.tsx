import style from "./footer.module.css"
import marca from "./img/marca.png"
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa"
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
                        <a href="https://www.figma.com/design/N4fA3LVl9YgOvvNnAppCtZ/New-Portafolio?node-id=0-1&p=f&t=GhQxwnoTNMGsXQMs-0" target="_blank">Figma.</a>
                    </li>
                    <li>
                        <a href="https://github.com/hlrivero18/portafolioV3" target="_blank">Repositorio.</a>
                    </li>
                    <li>
                        <a href="https://portafolio-v2-blue.vercel.app/" target="_blank">PortafolioV2.</a>
                    </li>
                    <li>
                        <a href="https://web-portafolio-sigma.vercel.app/" target="_blank">PortafolioV1.</a>
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