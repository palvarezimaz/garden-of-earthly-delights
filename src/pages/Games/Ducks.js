import * as Styled from "../../styles/styled"
import Button from "../../components/elements/Button";
import Footer from "../../components/elements/Footer";

function Ducks() {
  return (
    <div className="Ducks">
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Header>Duck hunter game</Styled.Header>
          <iframe
            width="800"
            height="600"
            id="duckwars"
            src="https://duck-wars.surge.sh/"
            title="Good 'ol duck game" />
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

    </div >


  );
}

export default Ducks;
