import style from "./certificaciones.module.css"
import certificados from "./certificados";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

function Certificaciones() {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    if (index < certificados.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  const anterior = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(certificados.length - 1);
    }
  }

  return (
    <section className={style.container}>
      <h1 className={style.titulo}>Certific<span>aciones.</span> </h1>
      <div className={style.certificados}>
        <IoIosArrowBack onClick={anterior} />
        <figure className={style.marco}>
          <a href={certificados[index].url} target="_blank">
            <img src={certificados[index].img} alt={certificados[index].nombre} />
          </a>
        </figure>
        <IoIosArrowForward onClick={siguiente} />
      </div>
    </section>
  );
}

export default Certificaciones;