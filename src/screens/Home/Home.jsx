import css from './Home.module.css';
import imgInicial from "../../assets/img-inicial.png";

function Home() {

  return (
    <section id='home' className={css.home}>
      <div className={css.imgFundo}>
        <img src={imgInicial} alt="Logo Cenariar" />
      </div>
      <div className={css.container}>
        <div className={css.left}>
          <p className={css.leftText}>
            Um espaço <br /> instagramável <br /> para registrar <br /> fotos memoráveis
          </p>
        </div>
        <div className={css.right}>
          <p className={css.rightText}>
            <a href='https://www.instagram.com/casacenariar/' target="_blank">A Casa Cenariar</a> é a mais nova casa de criação de conteúdo de Uberlândia,
            aqui a locação conta com cenários de vários países para fazer vídeos e fotos:
            Caraíva, Tulum, Grécia, Itália e até Marrocos
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home
