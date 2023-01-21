import React from 'react';
import '../styles/control.css';
import ControlBtn from '../components/ControlBtn';

function Control() {
  return (
    <div className='App control'>
      <div>
        <ControlBtn stateON={true} text={'ON'} />
        <ControlBtn stateON={false} text={'OFF'} />
      </div>
      <h1>Welcome, NAME</h1>
    </div>
  );
}

export default Control;
