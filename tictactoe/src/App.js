import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import Game from './components/Game'
import Square from './components/Square'

function App() {
  return (
    <div >
      <Board />
      <Game />
      <Square />
    </div>
  );
}

export default App;
