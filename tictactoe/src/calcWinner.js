const calcWinner = (squares) => {
  const seq = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let item of seq){
      const[a, b, c] = item;
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return squares[a];
      }
  }
  return null;
}
  

const squares = [null, null, null, 'X', 'O', 'X', null, null, null];
console.log(calcWinner(squares))

export default calcWinner;
