import * as Styled from "./styled"
import Button from "../../components/Button";

function Ducks() {
  return (
    <Styled.Container>
      <div className="Ducks">
        <h1>Duck hunter game</h1>
        <iframe width="800" height="600"
          id="duckwars" src="https://duck-wars.surge.sh/" title="Good 'ol duck game"></iframe>
        <h2>Can you kill 'em all?</h2>
        <Button
          to="/"
          value="Back to home"
          width="200px">
        </Button>
      </div >
    </Styled.Container>

  );
}

export default Ducks;
