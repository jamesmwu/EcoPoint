import React, { useState } from 'react';
// import { BluetoothRemoteGATTCharacteristic } from 'web-bluetooth-utils';
import '../styles/control.css';
import ControlBtn from '../components/ControlBtn';
import ConnectBtn from '../components/ConnectBtn';

// export const useESP32 = () => {
//   const [isConnected, setIsConnected] = useState(false);
//   const [toggleCharacteristic, setToggleCharacteristic] =
//     (useState < BluetoothRemoteGATTCharacteristic) | (null > null);

//   const connect = async () => {
//     const device = await navigator.bluetooth
//       .requestDevice({
//         acceptAllDevices: true,
//       })
//       .then((device) => {
//         //Do stuff with device
//         console.log(`Name: ${device.name}`);
//       })
//       .catch((error) => console.error(`Something went wrong. ${error}`));
//     const server = await device.gatt?.connect();

//     //Returns promise to BluetoothRemoteGATTService
//     const service = await server.getPrimaryService(
//       '00001101-0000-1000-8000-00805f9b34fb'
//     );

//     //Returns promise to BluetoothRemoteGATTCharacteristic
//     // const toggleChar = await service.getCharacteristic(
//     //   '932c32bd-0002-47a2-835a-a8d455b859dd' // Philips Hue Light On/Off Toggle
//     // );

//     // setToggleCharacteristic(toggleChar);
//     setIsConnected(true);
//   };

//   const toggle = async () => {
//     const currentValue = await toggleCharacteristic?.readValue();
//     const lightIsCurrentlyOn = currentValue?.getUint8(0) ? true : false;

//     await toggleCharacteristic?.writeValue(
//       new Uint8Array([lightIsCurrentlyOn ? 0x0 : 0x1])
//     );
//   };

//   return { connect, toggle, isConnected };
// };

function Control() {
  // const [isOn, setOn] = useState(false);
  // const [isConnected, setIsConnected] = useState(false);
  // const [toggleCharacteristic, setToggleCharacteristic] =
  //   (useState < BluetoothRemoteGATTCharacteristic) | (null > null);

  // const servUUID = 'EB7D5D0E-DA0E-A7A9-E179-D8498DEBE56E';
  // const charUUID = '4FAFC201-1Fb%-459E-8FCC-C5C9C331914B';

  // const connect = async () => {
  //   const device = await navigator.bluetooth
  //     .requestDevice({
  //       acceptAllDevices: true,
  //     })
  //     .then((device) => {
  //       //Do stuff with device
  //       console.log(`Name: ${device.name}`);
  //     })
  //     .catch((error) => console.error(`Something went wrong. ${error}`));
  //   const server = await device.gatt?.connect();

  //   //Returns promise to BluetoothRemoteGATTService
  //   const service = await server.getPrimaryService(servUUID);
  // };

  return (
    <div className='App'>
      <h1>Welcome, FINGERER.</h1>
      <ConnectBtn connect={connect} />
      {/* <button onClick={toggle}>Toggle light</button> */}

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
