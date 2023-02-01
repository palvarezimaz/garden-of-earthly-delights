import * as Styled from "../../styles/styled"
import Button from "../../components/elements/Button";

function TicTacToe() {
  return (<div className="TicTacToe" >
    <Styled.Container>
      <Styled.Header>Monkey Island's TicTacToe</Styled.Header>
      <iframe
        width="800" height="600"
        id="monkey-tic-tac-toe" src="https://palvarezimaz.github.io/tic-tac-toe/" title="Good 'ol TicTacToe in Monkey Island Style" />
      <Styled.SubHeader>
        Beat the Legendary Captain LeChuck
      </Styled.SubHeader>
      <Button
        to="/"
        value="Back to home"
        width="200px">
      </Button>
    </Styled.Container>
  </div>
  );
}

export default TicTacToe;
