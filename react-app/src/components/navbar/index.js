
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './navbar.css'

const NavBar = () => {
  return (
    <nav>
      <div className='navbar'>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
