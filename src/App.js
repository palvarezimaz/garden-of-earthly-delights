import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomeMobile from "./pages/Home/HomeMobile";
import Ducks from "./pages/Games/Ducks"
import About from "./pages/About";
import TicTacToe from "./pages/Games/TicTacToe";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Games/Ducks">Ducks</Link>
        <Link to="/Games/TicTacToe">TicTacToe</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomeMobile />} />
        <Route path="/Games/Ducks" element={<Ducks />} />
        <Route path="/Games/TicTacToe" element={<TicTacToe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
