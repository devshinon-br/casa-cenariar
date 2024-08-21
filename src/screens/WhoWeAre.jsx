import CallToAction from "../components/CallToAction";
import team from "../assets/team.svg";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px; 
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    gap: 30px; 
  }
`;

const ResponsiveImage = styled.img`
  width: 500px;  
  max-width: 100%;
  height: auto;
  display: block;

  @media (max-width: 768px) {
    width: 100%;  
    margin: 0 auto; 
  }
`;

function WhoWeAre({text}) {
  return (
    <Container>
      <TextContainer>
        <h1>Quem somos?</h1>
        <p>{text}</p>
        <CallToAction />
      </TextContainer>
      <ResponsiveImage src={team} alt="Grupo de quatro pessoas que compõe a equipe da casa cenariar" />
    </Container>
  );
}

export default WhoWeAre;
