import * as Styled from "../../styles/styled"
import Button from "../../components/elements/Button";
import Footer from "../../components/elements/Footer";

function Bottles() {
  return (
    <div className="99Bottles">
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Header>99 bottles of beer on the wall</Styled.Header>
          <iframe
            width="800"
            height="600"
            id="99bottles"
            src="https://stark-plateau-14754.herokuapp.com/"
            title="99 bottles of what?" />
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

    </div >


  );
}

export default Bottles;
