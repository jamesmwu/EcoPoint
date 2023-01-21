import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navBar.css';

function NavBar() {
  return (
    <div>
      <div className='navigation'>
        <div className='nav'>
          <NavLink to='/' className='link'>
            Control
          </NavLink>

          <NavLink to='/leaderboard' className='link'>
            Leaderboard
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
