import React, { useState } from 'react';
import '../styles/control.css';
import ControlBtn from '../components/ControlBtn';
import ConnectBtn from '../components/ConnectBtn';

function Control() {
  const [isOn, setOn] = useState(false);
  const connect = async () => {
    //"Device" is a promise to a BluetoothDevice object
    const device = await navigator.bluetooth
      .requestDevice({
        // filters: [
        //   {
        //     namePrefix: 'IFINGER',
        //   },
        // ],
        // optionalServices: ["932c32bd-0000-47a2-835a-a8d455b859dd"],
        acceptAllDevices: true,
      })
      .then((device) => {
        //Do stuff with device
        console.log(`Name: ${device.name}`);
      })
      .catch((error) => console.error(`Something went wrong. ${error}`));
  };

  return (
    <div className='App'>
      <h1>Welcome, FINGERER.</h1>
      <ConnectBtn connect={connect} />

      <div className='control'>
        <div className='container'>
          <ControlBtn stateON={isOn} setOn={setOn} />
        </div>

        <div className='container'>
          <h2>Your energy usage:</h2>
          <h3>*insert pie chart here*</h3>
          {/* Look into react-minimal-pie-chart */}
        </div>
      </div>
    </div>
  );
}

export default Control;
