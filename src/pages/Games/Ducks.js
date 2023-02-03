import * as Styled from "../../styles/styled"
import Button from "../../components/elements/Button";
import Footer from "../../components/elements/Footer";
import GameFrame from "../../components/elements/GameFrame";

function Ducks() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Header>Duck hunter game</Styled.Header>
        <GameFrame
          src="https://duck-wars.surge.sh/"
          allow="geolocation 'self' https://duck-wars.surge.sh/" />
        <Styled.SubHeader>
          Can you kill 'em all?
        </Styled.SubHeader>
        <Button
          to="/"
          value="Back to home"
          width="200px">
        </Button>
        <Footer />
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default Ducks;
