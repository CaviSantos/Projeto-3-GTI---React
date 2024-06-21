import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './PaginasPrimaria/Home';
import Sobre from './PaginasPrimaria/Sobre';
import Contato from './PaginasPrimaria/Contato';
import reportWebVitals from './reportWebVitals';


const App = () => {
  const [nome, setNome] = useState('');

  const handleNomeChange = (nome) => {
    setNome(nome);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home nome={nome} onNomeChange={handleNomeChange} />} />
        <Route path="/Inicio" element={<Home nome={nome} onNomeChange={handleNomeChange} />} />
        <Route path="/Sobre" element={<Sobre nome={nome} />} />
        <Route path="/Contato" element={<Contato nome={nome} />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
