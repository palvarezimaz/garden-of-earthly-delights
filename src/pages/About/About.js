import Button from "../../components/elements/Button";
import * as Styled from "../../styles/styled"


function About() {
  return (
    <div className="About">
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Header>
            About this page
          </Styled.Header>
          <Styled.Text>
            This app is the sum of diverse tinyapps that I've been building during
            the Software Engineering Immersive Course with GA, Cohort 53. The idea
            is to revisit, remember, practice, implement, expand, delete, forget or
            revive concepts seen during the course.
          </Styled.Text>
          <Button
            to="/"
            value="Back to home"
            width="200px">
          </Button>
        </Styled.Wrapper>
      </Styled.Container>
    </div>
  );
}

export default About;
