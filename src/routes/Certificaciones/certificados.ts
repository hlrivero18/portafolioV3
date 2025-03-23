import CertificadosInterface from "../../interface/Certificados_interface";
import maquetador from "./certificados/maquetador.jpeg";
import javascript from "./certificados/javascript.jpeg";
import reactimg from "./certificados/react.png";
import nodejs from "./certificados/nodejs.png";
import git from "./certificados/git.png";
import java from "./certificados/java.png";
import basico from "./certificados/basico.png";
import compu from "./certificados/compu.jpg";
import makro from "./certificados/makro.jpg";
import morgan from "./certificados/morgan.jpg";

const certificados : CertificadosInterface[] = [
    {
        nombre: "Full Stack Makro",
        img: makro,
        url: "https://www.pescar.org.ar/"
    },
    {
        nombre: "Full Stack Morgan",
        img: morgan,
        url: "https://www.pescar.org.ar/"
    },
    {
        nombre: "Maquetador Web",
        img: maquetador,
        url: "https://www.educacionit.com/perfil/hector-luis-rivero-1011332/certificado/74490?_gl=1*1q9e8ep*_ga*MTE2Nzk3MzQ2LjE3MTYzOTU5Mzk.*_ga_R8GR8LL2B8*MTc0Mjc1NTgzOS44Ny4xLjE3NDI3NTU4ODAuMTkuMC4xNjMxOTg0Njg3"
    },
    {
        nombre: "JavaScript",
        img: javascript,
        url: "https://www.educacionit.com/perfil/hector-luis-rivero-1011332/certificado/74487?_gl=1*1sk9djg*_ga*MTE2Nzk3MzQ2LjE3MTYzOTU5Mzk.*_ga_R8GR8LL2B8*MTc0Mjc1NTgzOS44Ny4xLjE3NDI3NTU5NzguNTYuMC4xNjMxOTg0Njg3"
    },
    {
        nombre: "React",
        img: reactimg,
        url: "https://www.educacionit.com/perfil/hector-luis-rivero-1011332/certificado/74495?_gl=1*1ioo1k8*_ga*MTE2Nzk3MzQ2LjE3MTYzOTU5Mzk.*_ga_R8GR8LL2B8*MTc0Mjc1NTgzOS44Ny4xLjE3NDI3NTY0ODYuNTcuMC4xNjMxOTg0Njg3"
    },
    {
        nombre: "NodeJs",
        img: nodejs,
        url: "https://www.educacionit.com/perfil/hector-luis-rivero-1011332/certificado/74494?_gl=1*1y25vkp*_ga*MTE2Nzk3MzQ2LjE3MTYzOTU5Mzk.*_ga_R8GR8LL2B8*MTc0Mjc1NTgzOS44Ny4xLjE3NDI3NTY2MzYuMTAuMC4xNjMxOTg0Njg3"
    },
    {
        nombre: "Git",
        img: git,
        url: "https://www.educacionit.com/perfil/hector-luis-rivero-1011332/certificado/74491?_gl=1*85a2sd*_ga*MTE2Nzk3MzQ2LjE3MTYzOTU5Mzk.*_ga_R8GR8LL2B8*MTc0Mjc1NTgzOS44Ny4xLjE3NDI3NTY5ODEuNjAuMC4xNjMxOTg0Njg3"
    },
    {
        nombre: "Java",
        img: java,
        url: "https://www.educacionit.com/perfil/hector-luis-rivero-1011332/certificado/75074?_gl=1*nrb913*_ga*MTE2Nzk3MzQ2LjE3MTYzOTU5Mzk.*_ga_R8GR8LL2B8*MTc0Mjc1NTgzOS44Ny4xLjE3NDI3NTcwNzIuNTcuMC4xNjMxOTg0Njg3"
    },
    {
        nombre: "Programacion Básica",
        img: basico,
        url: "https://platzi.com/p/hlrivero/curso/1050-basico-programacion/diploma/detalle/"
    },
    {
        nombre: "Reparación de PC",
        img: compu,
        url: "https://linktr.ee/cemproza1248974?fbclid=PAZXh0bgNhZW0CMTEAAabOmC2R9V2uX07XGVwFh-shIFlkG4WrqiDqpIPnAbd08JDWcmkz5peW4N4_aem_kTZ_JJ6S1_68HV2ppSrtCg"
    },
];

export default certificados; 