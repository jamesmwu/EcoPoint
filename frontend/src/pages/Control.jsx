import React, { useState } from 'react';
import BluetoothTerminal from 'bluetooth-terminal';
// import { BluetoothRemoteGATTCharacteristic } from 'web-bluetooth-utils';
import '../styles/control.css';
import ControlBtn from '../components/ControlBtn';
import ConnectBtn from '../components/ConnectBtn';

function Control() {
  const [isOn, setOn] = useState(false);

  const connect = async () => {
    // // Obtain configured instance.
    // let terminal = new BluetoothTerminal(
    //   '4fafc201-1fb5-459e-8fcc-c5c9c331914b',
    //   'bEb5483e-36e1-4688-b7F5-ea07361b26a8'
    // );
    // // Override `receive` method to handle incoming data as you want.
    // terminal.receive = function (data) {
    //   alert(data);
    // };
    // // Request the device for connection and get its name after successful connection.
    // terminal.connect().then(() => {
    //   alert(terminal.getDeviceName() + ' is connected!');
    // });
    // // Send something to the connected device.
    // terminal.send('Simon says: Hello, world!');
    // // Disconnect from the connected device.
    // terminal.disconnect();

    const device = await navigator.bluetooth
      .requestDevice({
        acceptAllDevices: true,
      })
      .then((device) => {
        //Do stuff with device
        console.log(`Name: ${device.name}`);
        // Obtain configured instance.
        let terminal = new BluetoothTerminal(
          '4fafc201-1fb5-459e-8fcc-c5c9c331914b',
          'bEb5483e-36e1-4688-b7F5-ea07361b26a8'
        );
        // Override `receive` method to handle incoming data as you want.
        terminal.receive = function (data) {
          alert(data);
        };
        // Request the device for connection and get its name after successful connection.
        terminal.connect().then(() => {
          alert(terminal.getDeviceName() + ' is connected!');
        });
        // Send something to the connected device.
        terminal.send('Simon says: Hello, world!');
        // Disconnect from the connected device.
        terminal.disconnect();
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
