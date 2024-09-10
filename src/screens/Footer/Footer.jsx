import css from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logoCenariar from '../../assets/logo_cenariar_fundo_branco-.png';


function Footer() {
    return (
        <footer className={css.secaoFooter}>
            <div className={css.container}>
                <div className={css['footerLogoCenariar']}>
                    <a href='#home'>
                        <img src={logoCenariar} alt="Logo Cenariar" className={css.logo} />
                    </a>
                </div>

                <div className={css['div-contato']}>
                    <h3 className={css['centralizado']}>Contato</h3>
                    <p><i className="fas fa-phone"></i> +55 34 99664-6441</p>
                </div>

                <div className={css.redesSociais}>
                    <h3 className={css['centralizado']}>Redes sociais</h3>
                    <div className={css['social-icons']}>
                        <a href="https://www.facebook.com/profile.php?id=61557559003256">
                            <i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/casacenariar/">
                            <i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
