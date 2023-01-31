import * as Styled from "./styled"
import Button from "../../components/Button";

function TicTacToe() {
  return (
    <Styled.Container>
      <div className="TicTacToe" >
        <h1>Monkey Island's TicTacToe</h1>
        <iframe width="900" height="600"
          id="monkey-tic-tac-toe" src="https://palvarezimaz.github.io/tic-tac-toe/" title="Good 'ol TicTacToe in Monkey Island Style"></iframe>
        <h2>Beat the Legendary Captain LeChuck</h2>
        <Button
          to="/"
          value="Back to home"
          width="200px">
        </Button>
      </div>
    </Styled.Container>
  );
}

export default TicTacToe;
