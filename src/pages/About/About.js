import Button from "../../components/elements/Button";
import Footer from "../../components/elements/Footer";
import * as Styled from "../../styles/styled"
import Github from '../../assets/github-32.png';


function About() {
  return (
    <div className="About">
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Header>
            About this page
          </Styled.Header>
          <Styled.TextWrapper>
            <Styled.Text>
              This app is the sum of diverse tinyapps that I've been building during
              the Software Engineering Immersive Course with GA, Cohort 53. The idea
              is to revisit, remember, practice, implement, expand, delete, forget or
              revive concepts seen during the course.
            </Styled.Text>
            <Styled.Text>
              Want to take a peep at the source code?
            </Styled.Text>
            <Styled.Text>
              <a
                href="https://github.com/palvarezimaz/garden-of-earthly-delights"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="github"></img>
              </a>
            </Styled.Text>
          </Styled.TextWrapper>

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

export default About;
