import style from "./experience.module.css"
import experiencias from "./experiencias";

function Experience() {
    return (
        <section className={style.container}>
            <h1 className={style.titulo}>Exper<span>iencias.</span></h1>

            <section className={style.container__experiencias}>
                {experiencias.map((experiencia, index) => {
                    return (
                        <div key={index} className={ `${style.card} ${index % 2 == 0 ? style.fadeRight : style.fadeLeft}`}>
                            <h1>{experiencia.cargo}</h1>
                            <p>{experiencia.duracion}</p>
                            <ul className={style.habilidades}>
                                {experiencia.habilidades.map((habilidad, index) => {
                                    return (
                                        <li key={index}>{habilidad}</li>
                                    )
                                })}
                            </ul>

                        </div>
                    )
                })}
            </section>

        </section>
    )
}

export default Experience; 