import React from 'react';

function ConnectBtn({ connect }) {
  return (
    <button
      onClick={() => {
        connect();
      }}
      className='connectBtn'
    >
      Connect
    </button>
  );
}

export default ConnectBtn;
