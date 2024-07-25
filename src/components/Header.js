import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import logo from './logo.svg';

const Header = () => {
  return (
    <header>
      <div className='header'>
        <img src={logo} alt='logo' />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A propos</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;