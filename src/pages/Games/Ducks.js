import * as Styled from "../../styles/styled"
import Button from "../../components/elements/Button";

function Ducks() {
  return (
    <div className="Ducks">
      <Styled.Container>
        <Styled.Header>Duck hunter game</Styled.Header>
        <iframe width="800" height="600"
          id="duckwars" src="https://duck-wars.surge.sh/" title="Good 'ol duck game"></iframe>
        <Styled.SubHeader>
          Can you kill 'em all?
        </Styled.SubHeader>
        <Button
          to="/"
          value="Back to home"
          width="200px">
        </Button>
      </Styled.Container>
    </div >


  );
}

export default Ducks;
