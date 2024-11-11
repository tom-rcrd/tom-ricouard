import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <ul className="nav">
        <li className="nav-item-title">
          <Link to="/Home" className={isActive('/Home') ? 'active' : ''}>
            Tom Ricouard
          </Link>
        </li>
        <ul className="nav-item-right">
          <li className="nav-item">
            <Link to="/Projets" className={isActive('/Projets') ? 'active' : ''}>
              Projets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Infos" className={isActive('/Infos') ? 'active' : ''}>
              Infos
            </Link>
          </li>
        </ul>
      </ul>


      <li className="nav-item-contact">
        <a href="mailto:contact@tomricouard.com">Contact ↗</a>
      </li>
    </nav>
  );
};

export default Navbar;
