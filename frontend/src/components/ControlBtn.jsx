import React from 'react';

function ControlBtn({ stateON, setOn }) {
  return (
    <div
      onClick={() => {
        setOn(!stateON);
      }}
    >
      {stateON ? (
        <button className='controlBtnON' onClick={console.log('HI')}>
          ON
        </button>
      ) : (
        <button className='controlBtnOFF' onClick={console.log('HI')}>
          OFF
        </button>
      )}
    </div>
  );
}

export default ControlBtn;
