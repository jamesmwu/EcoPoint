import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Control from './pages/Control';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        {/* TBD: Change path to /control after implementing user auth */}
        <Route index element={<Control />} />
      </Routes>
    </div>
  );
}

export default App;
