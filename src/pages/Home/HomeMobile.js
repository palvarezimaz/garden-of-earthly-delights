import * as Styled from "../../styles/styled"
import Home from "./Home"
import Footer from "../../components/elements/Footer";

const isMobile = window.innerWidth <= 600

export default function MobileHome() {
  if (!isMobile) {
    return <Home></Home>
  }
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Header>Welcome, stranger!</Styled.Header>
        <Styled.Text>
          This site is not optimized for Mobile use... yet. <br />
          Please, come back when you are using a larger screen
        </Styled.Text>
        <section>
          <Styled.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/800px-The_Garden_of_earthly_delights.jpg?20200528082018"
            alt="The Garden of earthly delights"
            style={{ transform: "scale(0.9)" }} />
        </section>
      </Styled.Wrapper>
    </Styled.Container>
  )
}


<Styled.Container>
  <Styled.Wrapper>
    <Styled.Header>
      Welcome to<br />
      -The Garden of earhtly delights-
    </Styled.Header>
    <section>
      <Styled.Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/800px-The_Garden_of_earthly_delights.jpg?20200528082018"
        alt="The Garden of earthly delights"
        style={{ transform: "scale(0.9)" }}
      />
    </section>
    <Styled.Text>Use the Navigation bar on the top to indulge your senses with senseless apps</Styled.Text>
    <Footer />
  </Styled.Wrapper>
</Styled.Container>