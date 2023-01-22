import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from '../components/Board';
import '../styles/leader.css';

const URL = 'http://localhost:3001';

function Leaderboard() {
  const [users, setUsers] = useState([]);

  async function getUser() {
    try {
      const { data } = await axios.get(URL + '/users');
      let temp = [];

      for (let i of data) {
        temp.push(i.username);
      }

      setUsers(temp);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className='leader'>
      <h1 style={{ marginBottom: '3rem' }}>Leaderboard</h1>
      {users.map((user) => {
        return <Board user={user} />;
      })}
    </div>
  );
}

export default Leaderboard;
