import React, { useState, useEffect } from 'react';
import BluetoothTerminal from 'bluetooth-terminal';
// import { BluetoothRemoteGATTCharacteristic } from 'web-bluetooth-utils';
import '../styles/control.css';
import ControlBtn from '../components/ControlBtn';
import ConnectBtn from '../components/ConnectBtn';
import LineGraph from 'react-line-graph';
import axios from 'axios';

const URL = 'http://localhost:3001';

function Control() {
  const [isOn, setOn] = useState(false);
  const [data, setData] = useState([]);

  // const data = [
  //   22.00088501, 21.9701767, 21.98638916, 21.97284698, 21.96483612, 21.95625305,
  //   21.96369171, 21.95568085, 21.97570801, 21.96083069, 21.96025848,
  //   22.01023102, 21.9953537, 22.01118469, 22.00298309,
  // ];
  // const data = [[0,20], [-30,40], [-88.9, 9]]; // LineGraph reads these as x,y pairs

  const props = {
    data,
    smoothing: 0.3,
    accent: 'black',
    fillBelow: '#7e6551',
    hover: true,
  };

  async function getArr() {
    try {
      const response = await axios.get(URL + '/readings/');
      let arr = response.data;
      let temp = [];

      // console.log(arr[0].measurements.TEMPURATURES);

      for (let i of arr) {
        let xy = [];
        xy.push(i.measurements.TEMPURATURES);
        xy.push(i.measurements.HUMIDITY);

        temp.push(xy);
      }
      console.log(temp);

      setData(temp);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getArr();
  }, []);

  const connect = async () => {
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
      <LineGraph {...props} />

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
