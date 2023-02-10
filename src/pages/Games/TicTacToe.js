import * as Styled from "../../styles/styled"
import Button from "../../components/elements/Button";
import Footer from "../../components/elements/Footer";
import GameFrame from "../../components/elements/GameFrame";

function TicTacToe() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Header>Monkey Island's TicTacToe
        </Styled.Header>
        <GameFrame
          src="https://palvarezimaz.github.io/tic-tac-toe/"
        // allow="geolocation 'self' https://palvarezimaz.github.io/tic-tac-toe/"
        />
        <Styled.SubHeader>
          Beat the Legendary Captain LeChuck
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

export default TicTacToe;
