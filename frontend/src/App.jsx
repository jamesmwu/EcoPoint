import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Control from './pages/Control';
import NavBar from './components/NavBar';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        {/* TBD: Change path to /control after implementing user auth */}
        <Route index element={<Control />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
