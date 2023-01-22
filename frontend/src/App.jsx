import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Control from './pages/Control';
import NavBar from './components/NavBar';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        {/* TBD: Change path to /control after implementing user auth */}
        <Route index element={<Profile />} />
        <Route path='/control' element={<Control />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
