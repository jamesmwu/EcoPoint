import React from 'react';

function ControlBtn({ stateON, setOn }) {
  return (
    <div
      onClick={() => {
        setOn(!stateON);
      }}
    >
      {stateON ? (
        <button className='controlBtnON' onClick={console.log('Pressed')}>
          ON
        </button>
      ) : (
        <button className='controlBtnOFF' onClick={console.log('Pressed')}>
          OFF
        </button>
      )}
    </div>
  );
}

export default ControlBtn;
