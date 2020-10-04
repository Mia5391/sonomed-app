import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Te damos la bienvenida a Sonomed!
        </p>
        <a
          className="App-link"
          href="/calendar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar Hora
        </a>
      </header>
    </div>
  );
}

export default App;
