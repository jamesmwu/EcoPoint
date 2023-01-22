import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navBar.css';

function NavBar() {
  return (
    <div className='navigation'>
      <div className='nav'>
        <NavLink to='/' className='link'>
          <h4>Profile</h4>
        </NavLink>
        <NavLink to='/control' className='link'>
          <h4>Control</h4>
        </NavLink>
        <NavLink to='/leaderboard' className='link'>
          <h4>Leaderboard</h4>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
