import * as Styled from "../../styles/styled"
import GameFrame from "../../components/elements/GameFrame";
import Button from "../../components/elements/Button";
import Footer from "../../components/elements/Footer";

function Bottles() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Header>99 bottles of beer on the wall</Styled.Header>
        <Styled.TextWrapper>
          <Styled.Text>
            (check your audio volume first!)
          </Styled.Text>
        </Styled.TextWrapper>

        <GameFrame
          src="https://stark-plateau-14754.herokuapp.com/"
          allow="geolocation 'self' https://stark-plateau-14754.herokuapp.com/" />
        <Styled.SubHeader>
          Can you get the counter to 0?
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

export default Bottles;
