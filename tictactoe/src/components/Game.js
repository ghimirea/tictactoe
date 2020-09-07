import React, { useState } from 'react';
import Board from './Board';
import calcWinner from '../calcWinner';

const styles = {
  width: '200px',
  margin: '20px auto',
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const winner = calcWinner(history[stepNumber]);

  // Clicking functionality to determine winner or the turn
  const handleClick = (index) => {
    const boardInHistory = history.slice(0, stepNumber + 1);
    const currentBoard = boardInHistory[stepNumber];
    const copyCurrentBoard = [...currentBoard];
    // if user click on the square that already is occupied or if winner is declared
    if (winner || copyCurrentBoard[index]) return;

    // Put an 'X' or 'O' depending on whose turn it is
    copyCurrentBoard[index] = isNext ? 'X' : 'O';

    setHistory([...boardInHistory, copyCurrentBoard]);
    setStepNumber(boardInHistory.length);
    setIsNext(!isNext);
  };

  //Go to listed moves
  const goTo = (move) => {
    setStepNumber(move);
    setIsNext(move % 2 === 0);
  };

  //Reset the Game or move to certain steps
  const gameMoves = () =>
    history.map((_step, move) => {
      console.log('Inside gameMoves map');
      const moveNumber = move ? `Move- ${move}` : 'Start';
      return (
        <li key={move}>
          <button onClick={() => goTo(move)}>{moveNumber}</button>
        </li>
      );
    });

  const nextPlayer = isNext ? 'X' : 'O';
  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner ? `The Winner is ${winner}` : `Next Player:  ${nextPlayer}`}
          {gameMoves()}
        </p>
      </div>
    </>
  );
};

export default Game;
