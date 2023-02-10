
import { Routes, Route } from "react-router-dom";
import HomeMobile from "./pages/Home/HomeMobile";
import Ducks from "./pages/Games/Ducks"
import About from "./pages/About/About";
import TicTacToe from "./pages/Games/TicTacToe";
import RomanToNumeral from "./pages/Apps/RomanToNumeral"
import Bottles from "./pages/Games/Bottles";
import * as Styled from "./styles/styled"
import NavBar from "./components/layouts/Navbar";


function App() {
  return (
    <Styled.GeneralContainer>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomeMobile />} />
        <Route path="/games/ducks" element={<Ducks />} />
        <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/games/99-bottles" element={<Bottles />} />
        <Route path="/apps/roman-numbers" element={<RomanToNumeral />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Styled.GeneralContainer>
  );
}

export default App;
