import CallToAction from "../../components/CallToAction";
import team from "../../assets/team.svg";
import css from './WhoWeAre.module.css';

function WhoWeAre() {
  return (
    <div id="quem-somos" className={css.container}>
      <div className={css.textContainer}>
        <h1>Quem somos?</h1>
        <p>
          <span className={css.spamEspaco}>
            Somos uma casa de produção de conteúdo especializada em criar
            experiências visuais inesquecíveis para o seu ensaio, marca e
            estratégia.
          </span>

          <span className={css.spamEspaco}>
            Cada detalhe é pensado para refletir a essência do que você busca
            pra sua campanha, oferecendo cenários lindos!
          </span>
        </p>
      </div>
      <CallToAction />
      <img className={css.responsiveImage} src={team} alt="Grupo de quatro pessoas que compõe a equipe da casa cenariar" />
    </div>
  );
}

export default WhoWeAre;
