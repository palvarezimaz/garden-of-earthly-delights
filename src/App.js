import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home name={'user'} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
