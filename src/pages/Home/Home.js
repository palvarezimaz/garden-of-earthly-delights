import * as Styled from "./styled"


function Home() {
  return (
    <Styled.Container>
      <Styled.Wrapper>

        <h1>Welcome to The Garden of earhtly delights App</h1>

        <section>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/800px-The_Garden_of_earthly_delights.jpg?20200528082018"
            alt="The Garden of earthly delights"
            style={{ transform: "scale(0.9)" }}
          />
        </section>
      </Styled.Wrapper>
    </Styled.Container >
  );
}

export default Home;
