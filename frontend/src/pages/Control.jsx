import React, { useState } from 'react';
// import { BluetoothRemoteGATTCharacteristic } from 'web-bluetooth-utils';
import '../styles/control.css';
import ControlBtn from '../components/ControlBtn';
import ConnectBtn from '../components/ConnectBtn';

function Control() {
  const [isOn, setOn] = useState(false);

  const connect = async () => {
    const device = await navigator.bluetooth
      .requestDevice({
        acceptAllDevices: true,
      })
      .then((device) => {
        //Do stuff with device
        console.log(`Name: ${device.name}`);
      })
      .catch((error) => console.error(`Something went wrong. ${error}`));
    // const server = await device.gatt?.connect();

    //Returns promise to BluetoothRemoteGATTService
    // const service = await server.getPrimaryService(servUUID);
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
