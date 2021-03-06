import React, { useState } from 'react';
import Board from './Board';
import calcWinner from '../calcWinner';
import '../App.css';

const styles = {
  header: {
    backgroundColor: 'lightblue',
    fontSize: 'var(--headerFontSize)',
    fontWeight: '800',
    padding: 'var(--headerPadding)',
    textAlign: 'center',
    position: 'relative',
  },

  turn: {
    border: '0.1 rem solid black',
    position: 'absolute',
    // width: '200px',
    // margin: '20px auto',
    backgroundColor: 'lightblue',
    // display: 'flex',
    justifyContent: 'flex-start',
    alignItem: 'flex-start',
    top: '5%',
    left: '0',
  },
  move: {
    border: '0.1 rem solid black',
    fontSize: '1rem',
    // display: 'flex',
    padding: '0.3rem',
    margin: '0.3rem',
    backgroundColor: 'lightblue',
    top: '5%',
    right: '0',
  },
  footer: {
    backgroundColor: 'lightblue',
    fontSize: 'var(--footerFontSize)',
    fontWeight: '800',
    padding: 'var(--footerPadding)',
    textAlign: 'center',
    bottom: '0',
    width: '100%',
    position: 'fixed',
  },
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
      const moveNumber = move ? `Move- ${move}` : 'Start';
      return (
        <button style={styles.move} onClick={() => goTo(move)}>
          <p>{moveNumber}</p>
        </button>
      );
    });

  const nextPlayer = isNext ? 'X' : 'O';
  return (
    <>
      <header style={styles.header}>Tic-Tac-Toe Game with Time Travel</header>
      <main>
        <Board squares={history[stepNumber]} onClick={handleClick} />

        <p style={styles.turn}>
          {winner ? `The Winner is ${winner}` : `Next Player:  ${nextPlayer}`}
        </p>

        <div>
          <div style={{ position: 'absolute', top: '5%', right: '0' }}>
            <p>{gameMoves()}</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            feugiat varius tortor et cursus. Mauris at molestie sem, eu
            consequat urna. Praesent a tempor augue. Vestibulum suscipit
            eleifend tempus. Nunc ultricies iaculis viverra. Vivamus egestas sit
            amet purus a varius. Pellentesque neque nisi, feugiat ac ex et,
            fermentum sodales ex. Proin id purus sit amet magna luctus eleifend.
            Mauris ut libero id est fringilla sollicitudin eget eu nibh. Aenean
            eu tellus quis leo blandit dictum sed nec magna. Nunc tincidunt elit
            sit amet imperdiet egestas. Nunc ac tortor sagittis, laoreet leo
            nec, interdum lectus. Nulla ut est sed odio sollicitudin dictum.
          </p>
          <p>
            Nunc cursus facilisis risus. In hac habitasse platea dictumst.
            Pellentesque pellentesque dui quis elit ornare iaculis. Integer id
            bibendum sem. Quisque ante mi, cursus suscipit sem non, elementum
            convallis lectus. Vestibulum at congue nibh. Nam sit amet maximus
            neque, at viverra nulla. Morbi mollis augue eget purus rutrum, et
            tincidunt purus egestas. Phasellus pretium elit dui, eu tincidunt
            elit tincidunt a. Suspendisse eu ullamcorper ligula. Quisque a lacus
            velit. Donec commodo arcu a purus interdum, nec tincidunt tortor
            imperdiet. Vivamus gravida nulla sed lectus pellentesque, at
            pulvinar odio blandit. Aenean nec ligula tempor, fermentum tellus
            in, dignissim justo. Nam sollicitudin pharetra suscipit. Duis nec
            purus at orci faucibus pulvinar non nec diam. Mauris magna dui,
            sagittis vitae sollicitudin vitae, lacinia sed tellus. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Quisque non scelerisque justo. Pellentesque velit libero,
            porta ut luctus eu, consequat mollis odio. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Phasellus elementum scelerisque tellus, a rutrum est
            hendrerit sed. Suspendisse consectetur magna id dui porta, vel
            fermentum nisi vestibulum. Vestibulum malesuada arcu at ante
            vulputate, ac dapibus lacus fringilla. Ut ex ante, congue volutpat
            elementum ac, egestas sit amet sem. Sed commodo turpis velit.
            Pellentesque commodo placerat risus, non rutrum turpis tincidunt
            nec. Cras iaculis faucibus sem vel iaculis. Ut sit amet dolor nibh.
            Quisque vehicula massa ac sapien iaculis lacinia. Donec eros eros,
            scelerisque a ornare ac, auctor vel urna. Maecenas vel mauris porta,
            rutrum magna nec, malesuada est. Duis cursus placerat purus sit amet
            rutrum. Fusce imperdiet venenatis quam vel congue. Vestibulum
            laoreet ante at mi egestas convallis. Donec euismod, mi eu feugiat
            bibendum, metus quam tincidunt erat, in interdum quam risus eget
            elit. Etiam at vehicula neque, eu tincidunt mauris. Nulla faucibus
            rhoncus leo, sit amet volutpat velit pharetra at. Mauris ac urna
            pretium, faucibus velit quis, commodo lacus.
          </p>
        </div>
      </main>
      <footer style={styles.footer}>Made using React Hooks</footer>
    </>
  );
};

export default Game;
