import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/profile.css';

const URL = 'http://localhost:3001';

function Profile() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (err) => {
    axios
      .get(URL + '/users/login')
      .then((res) => {
        console.log(res);
        navigate('/control');
      })
      .catch((error) => {
        console.log(error);
        setErr(true);
      });
  };

  const handleSignup = async (err) => {
    axios
      .post(URL + '/users/new', {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate('/control');
  };

  return (
    <div className='login_page'>
      <div className='login_box'>
        <h1 className='header'>Login</h1>
        <div className='login_form'>
          <input
            className='input'
            placeholder='Username'
            type='text'
            val={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='input'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {err ? <p className='error'>User not found.</p> : null}
          <button className='login_button' onClick={handleLogin}>
            log in
          </button>
          <button className='signup_button' onClick={handleSignup}>
            sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
