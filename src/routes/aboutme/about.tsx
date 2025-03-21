import style from "./about.module.css"
import { SiJavascript, SiExpress, SiPython, SiMongodb, SiSequelize } from "react-icons/si";
import { IoLogoHtml5, IoLogoReact } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoJava } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

function About() {
    return (
        <section className={style.container}>
            <h1 className={style.titulo}>Héctor <span>Rivero.</span></h1>
            <p className={style.subti}>Soporte Técnico y Desarrollador Web.</p>
            <p className={style.description}>
                Soy un desarrollador web ágil, autodidacta y responsable, apasionado por resolver problemas mediante el uso de herramientas tecnológicas actuales. Me destaco por mi capacidad de resolución de problemas, autocrítica, gestión del tiempo, creatividad y trabajo en equipo, cualidades que aplico constantemente para ofrecer soluciones dinámicas y eficientes que mejoren la experiencia del cliente.
                <br/>
                Además, tengo experiencia como soporte técnico independiente, brindando soluciones efectivas a usuarios, lo que me ha permitido fortalecer mis habilidades de comunicación y atención al cliente.
                <br/>
                Actualmente, trabajo con tecnologías de front-end como React, Next.js, Tailwind CSS, Redux y React Router. En el back-end, utilizo TypeScript, Express.js, Sequelize y PostgreSQL, además de tener conocimientos en Python y Java. También manejo herramientas clave para el desarrollo y la colaboración, como Git, Scrum y Figma.
            </p>
            <div className={style.techSkils}>
                <h1>Tech Skils:</h1>
                <p><SiJavascript /> <IoLogoHtml5 /> <FaCss3Alt /> <IoLogoReact /> <RiNextjsFill /> <FaNodeJs /> <SiExpress /> <BiLogoPostgresql /> <SiSequelize /> <BiLogoJava /> <SiPython /> <SiMongodb /></p>
            </div>
            <div className={style.techSkilsMob}>
                <h1>Tech Skils:</h1>
                <p><SiJavascript /> <IoLogoHtml5 /> <FaCss3Alt /> <IoLogoReact /> <RiNextjsFill /> <FaNodeJs /></p>
                <p><SiExpress /> <BiLogoPostgresql /> <SiSequelize /> <BiLogoJava /> <SiPython /> <SiMongodb /></p>
            </div>
        </section>
    )
}

export default About