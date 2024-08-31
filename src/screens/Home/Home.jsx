import css from './Home.module.css';
import imgInicial from "../../assets/img-inicial.png"; 
import Header from '../Header/Header';


function Home() {

  return (
    <section className={css.home}>
      <Header/>
      <div className={css.imgFundo}>
        <img src={imgInicial} alt="Logo Cenariar" />
      </div>
      <div className={css.container}>
        <div className={css.left}>
          <p className={css.leftText}>
            Um espaço <br/> instagramável <br/> para registrar <br/> fotos memoráveis
          </p>
        </div>
        <div className={css.right}>
          <p className={css.rightText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor inLorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt utcididunt ut labore etLorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home
