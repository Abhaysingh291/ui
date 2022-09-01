import './App.css';
import CollapsibleExample from './components/navbar';
import { Routes, Route, } from "react-router-dom";
import Home from './components/Home';
import About from './components/about';
function App() {
  return (
    <div className="App">
      <CollapsibleExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
