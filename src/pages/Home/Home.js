import * as Styled from "../../styles/styled"


function Home() {
  return (

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
        <Styled.TextWrapper>
          <Styled.Text>
            Use the Navigation bar on the top to indulge your senses with senseless apps

          </Styled.Text>
        </Styled.TextWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default Home;
