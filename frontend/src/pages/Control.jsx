import React from 'react';
import '../styles/control.css';
import ControlBtn from '../components/ControlBtn';

function Control() {
  return (
    <div className='App'>
      <h1>Welcome, FINGERER.</h1>

      <div className='control'>
        <div className='container'>
          <ControlBtn stateON={true} text={'ON'} />
          <ControlBtn stateON={false} text={'OFF'} />
        </div>

        <div className='container'>
          <h2>Your energy usage:</h2>
          <h3>*insert pie chart here*</h3>
        </div>
      </div>
    </div>
  );
}

export default Control;
