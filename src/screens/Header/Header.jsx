import { useState, useEffect, useRef } from 'react';
import css from './Header.module.css';
import logo from "../../assets/logo-header.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referência para o menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <div className={css.logo}>
          <a href="#home">
            <img src={logo} alt="Logo Cenariar" />
          </a>
        </div>
        <button className={css.menuToggle} onClick={toggleMenu}>
          ☰
        </button>
        <nav 
          className={`${css.menu} ${isMenuOpen ? css.menuOpen : css.menuClosed}`}
          ref={menuRef} // Adicione a referência aqui
        >
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
