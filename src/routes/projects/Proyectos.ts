import ProyectosInterface from "../../interface/Proyectos_interface";
import pokeImg from "./logos/pokeapp.png"
import bohoImg from "./logos/boho.png"
import inspoImg from "./logos/inspoit.png"
import calculadora from "./logos/calendario.png"

const proyectos: ProyectosInterface[] = [
    {
        nombre: "InspoIT(2024)",
        descripcion: "InspoIT es un proyecto grupal que nace de una necesidad tecnológica entre fundaciones sin fines de lucro con poco acceso a la tecnología y trainees del área IT en busca de su primer proyecto con impacto real, siendo InspoIT una red que conecta a estos grupos en busca del desarrollo social y personal.<br/> Tecnologías utilizadas: React, CSS, React Router, Redux, Express y MongoDB.",
        img: inspoImg,
        url: "https://inspoit.vercel.app/"
    },
    {
        nombre: "PokeApp(2023)",
        descripcion: "PokeApp es una SPA desarrollada con React que permite buscar y filtrar información sobre Pokémon, consumiendo datos de un backend y una base de datos propia. El proyecto incluye búsqueda por nombre, filtros por tipo y paginación.<br/> Tecnologías: React, CSS, React Router, Redux, Express, Sequelize y PostgreSQL.",
        img: pokeImg,
        url: "https://pokemon-omega-three.vercel.app/"
    },
    {
        nombre: "Boho(2023)",
        descripcion: "Fue un proyecto grupal desarrollado con tecnología PERN (PostgreSQL, Express, React, Node) que consiste en una tienda online de compra de entradas a eventos. Incluye funcionalidades como carrito de compras, filtros por categoría y paginación.<br/>Tecnologías: React, CSS, React Router, Redux, Express, Sequelize y PostgreSQL.<br/>Este proyecto me permitió aprender sobre el manejo de sesiones y la implementación de carritos de compras.",
        img: bohoImg,
        url: "https://pf-ptb-grupo-06.vercel.app/"
    },
    {
        nombre: "Calculadora de edad(2022)",
        descripcion: "Es mi primer proyecto, una calculadora de edad que permite calcular la edad de una persona a partir de su fecha de nacimiento. Fue desarrollado con HTML, CSS y JavaScript.<br/>Este proyecto me permitió entrar en el mundo de la programación e ir de a poco desarrollando mis habilidades.",
        img: calculadora,
        url: "https://calculadora-edad.vercel.app/"
    },
]

export default proyectos;  