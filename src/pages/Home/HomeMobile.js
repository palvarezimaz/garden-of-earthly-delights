import * as Styled from "./styled"
import Home from "./Home"

const isMobile = window.innerWidth <= 600

export default function MobileHome() {
  if (!isMobile) {
    return <Home></Home>
  }
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <h1>Welcome, stranger!</h1>
        <h2>This site is not optimized for Mobile use... yet.</h2>
        <h2>Please, come back when you are using a larger screen</h2>
        <section>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/800px-The_Garden_of_earthly_delights.jpg?20200528082018"
            alt="The Garden of earthly delights"
            style={{ transform: "scale(0.9)" }}
          />
        </section>
      </Styled.Wrapper>
    </Styled.Container>
  )
}