import React from 'react';

function Board({ user }) {
  return (
    <div className='board'>
      <h1>{user}</h1>
    </div>
  );
}

export default Board;
