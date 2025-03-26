import style from './home.module.css'
import logo from '../../../public/img/logo.png'


function Home() {

  return (
    <main className={style.container}>
      <figure className={style.logo}>
        <img className='m-auto' src={logo} alt="logo central" />
      </figure>
      <section className={style.presentacion}>
        <h1 className={style.titulo}>Hola!<br /> mi nombre<br /> es <span>Hector.</span></h1>
        <p className={style.description}>Soporte Técnico y Desarrollador web.</p>
      </section>
      <section className={style.containerList}>
        <ul >
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/hector-luis-rivero-311578260/">LinkedIn</a>
          </li>
          <li>
            <a target="_blank" href="mailto:hectorluisrivero14@gmail.com">Gmail</a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/hlrivero18">Github</a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/Mrsalitre">Telegram</a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Home