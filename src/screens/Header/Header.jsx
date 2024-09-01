import css from './Header.module.css'
import logo from "../../assets/logo-header.png";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <div className={css.logo}>
          <a href="#home">
            <img src={logo} alt="Logo Cenariar" />
          </a>
        </div>
        <nav className={css.menu}>
          <li><a href="#quem-somos">Quem Somos</a></li>
          <li><a href="#espacos">Nossos Espaços</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#opiniao-cliente">Opinião dos Clientes</a></li>
          <li><a href='#entre-em-contato'>Fale com a gente</a></li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
