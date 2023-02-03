
import { Routes, Route } from "react-router-dom";
import HomeMobile from "./pages/Home/HomeMobile";
import Ducks from "./pages/Games/Ducks"
import About from "./pages/About/About";
import TicTacToe from "./pages/Games/TicTacToe";
import RomanToNumeral from "./pages/Apps/RomanToNumeral"
import Bottles from "./pages/Games/Bottles";
import * as Styled from "./styles/styled"
import { NavBarContainer, NavBarLinkContainer, NavBarLink, ButtonLink } from "./styles/NavBarStyled";

function App() {
  return (
    <Styled.GeneralContainer>
      <NavBarContainer>
        <NavBarLinkContainer>
          <NavBarLink
            className="nav-link active"
            to="/">Home
          </NavBarLink>
          <NavBarLink
            className="nav-link"
            to="/games/ducks">Ducks
          </NavBarLink>
          <NavBarLink
            className="nav-link"
            to="/games/tic-tac-toe">TicTacToe
          </NavBarLink>
          <NavBarLink
            className="nav-link"
            to="/games/99-bottles">99 Bottles
          </NavBarLink>
          <NavBarLink
            className="nav-link"
            to="/apps/roman-numbers">Roman Numbers
          </NavBarLink>
          <NavBarLink
            className="nav-link"
            to="/about">About
          </NavBarLink>
          <ButtonLink>&#8801;</ButtonLink>
        </NavBarLinkContainer>
      </NavBarContainer>

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
