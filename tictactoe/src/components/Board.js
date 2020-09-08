import React from 'react';
import Square from './Square';

const styles = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  marginLeft: '35%',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
};

const Board = ({ squares, onClick }) => (
  <div style={styles}>
    {squares.map((item, i) => {
      return <Square key={i} value={item} onClick={() => onClick(i)} />;
    })}
  </div>
);

export default Board;
