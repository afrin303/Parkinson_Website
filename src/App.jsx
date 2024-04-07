import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Detection from './components/Detection'
import Teams from './components/Teams';
import Diagnosis from './components/Diagnosis';
import './App.css';

function App() {
  return (
   
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detection" element={<Detection />} />
          <Route path="/Diagnosis" element={<Diagnosis />} />
          <Route path="/Teams" element={<Teams />} />
        </Routes>
      </div>

  );
}

function Navbar() {
  return (
    <nav>
      <div className="logo">PK-AI-SUITE</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/detection">Detection</Link></li>
        <li><Link to="/diagnosis">Diagnosis</Link></li>
        <li><Link to="/Teams">Teams</Link></li>
      </ul>
      <Link to="/login"><button>LOGIN</button></Link>
    </nav>
  );
}

function Home() {
  return (
    <section className="hero">
      <div className="center">
        <h1>Parkinson Disesase Detection using Deep Learning</h1>
      </div>
    </section>
  );
}

export default App;
