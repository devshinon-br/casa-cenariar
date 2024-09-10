import css from './MobileHeader.module.css'
import logo from "../../assets/logo-header.png";
import { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";

const MobileHeader = () => {

	const [isOpen, setIsOpen] = useState(false); // Estado do menu

	const toggleMenu = () => {
		console.log(isOpen)
		setIsOpen(!isOpen); // Alterna entre aberto e fechado
	};

	return (
		<header className={css.header}>
			<div className={css.headerContainer}>
				<div className={css.logo}>
					<a href="#home">
						<img src={logo} alt="Logo Cenariar" />
					</a>
				</div>
				<div>
					<button className={css.hamburger} onClick={toggleMenu}>
						<IoMenuOutline className={css.icon} />
					</button>
				</div>
			</div>
			<nav className={`${css.menu} ${isOpen ? css.open : ''}`}>
				<li><a href="#quem-somos">Quem Somos</a></li>
				<li><a href="#espacos">Nossos Espaços</a></li>
				<li><a href="#faq">FAQ</a></li>
				<li><a href="#opiniao-cliente">Opinião dos Clientes</a></li>
				<li><a href="#entre-em-contato">Fale com a gente</a></li>
			</nav>
		</header>
	);
}
export default MobileHeader;