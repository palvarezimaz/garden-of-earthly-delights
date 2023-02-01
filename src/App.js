
import { Routes, Route, Link } from "react-router-dom";
import HomeMobile from "./pages/Home/HomeMobile";
import Ducks from "./pages/Games/Ducks"
import About from "./pages/About/About";
import TicTacToe from "./pages/Games/TicTacToe";
import RomanToNumeral from "./pages/Apps/RomanToNumeral"
import * as Styled from "./styles/styled"

function App() {
  return (
    <div className="App">
      <Styled.GeneralContainer>
        <Styled.NavBar>
          <Link to="/">Home</Link>
          <Link to="/games/ducks">Ducks</Link>
          <Link to="/games/tic-tac-toe">TicTacToe</Link>
          <Link to="/apps/roman-numbers">Roman Numbers</Link>
          <Link to="/about">About</Link>
        </Styled.NavBar>

        <Routes>
          <Route path="/" element={<HomeMobile />} />
          <Route path="/games/ducks" element={<Ducks />} />
          <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/apps/roman-numbers" element={<RomanToNumeral />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Styled.GeneralContainer>
    </div>
  );
}

export default App;
