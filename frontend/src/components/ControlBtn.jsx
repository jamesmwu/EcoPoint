import React from 'react';

function ControlBtn({ stateON, text }) {
  return (
    <div>
      {stateON ? (
        <button className='controlBtnON' onClick={console.log('HI')}>
          {text}
        </button>
      ) : (
        <button className='controlBtnOFF' onClick={console.log('HI')}>
          {text}
        </button>
      )}
    </div>
  );
}

export default ControlBtn;
