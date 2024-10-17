import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../resources/logo_header.svg';

const Header = () => {
  return (
    <header>
      <div className='header'>
        <NavLink to='/'><img src={logo} alt='logo' /></NavLink>
        <nav>
          <ul>
            <li>
              <NavLink
               to="/"
               className={({ isActive }) => (isActive ? 'active' : '')}>
              Accueil</NavLink>
            </li>
            <li>
              <NavLink
               to="/about" 
               className={({ isActive }) => (isActive ? 'active' : '')}>
              À propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
