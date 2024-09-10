import CallToAction from "../../components/CallToAction";
import team from "../../assets/team.svg";
import css from './WhoWeAre.module.css';

function WhoWeAre() {
  return (
    <div id="quem-somos" className={css.container}>
      <div className={css.textContainer}>
        <h1>Quem somos?</h1>
        <p>Consectetur adipisicing deserunt deserunt dolore cillum elit dolor amet labore deserunt consequat nisi magna aliqua. Mollit esse dolore amet minim duis reprehenderit incididunt.</p>
      </div>
      <CallToAction />
      <img className={css.responsiveImage} src={team} alt="Grupo de quatro pessoas que compõe a equipe da casa cenariar" />
    </div>
  );
}

export default WhoWeAre;
