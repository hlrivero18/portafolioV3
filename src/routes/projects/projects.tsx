import style from "./projects.module.css";
import proyectos from "./Proyectos";

function Project() {

    return (
        <section className={style.container}>
            <h1 className={style.titulo}>Proy<span>ectos.</span> </h1>

            <section>
                {proyectos.map((proyecto, index) => {
                    return (
                        <div key={index} className={style.card}>
                            <figure className={style.card__img}>
                                <a target="_blank" href={proyecto.url}>
                                   <img src={proyecto.img} alt="" /> 
                                </a>
                            </figure>
                            <div className={style.card__info}>
                                <h1>{proyecto.nombre}</h1>
                                <p dangerouslySetInnerHTML={{ __html: proyecto.descripcion }}></p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </section>
    )
}

export default Project