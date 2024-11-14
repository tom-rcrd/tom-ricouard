import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      {/* Navbar Desktop */}
      <nav className="navbar-desktop">
        <ul className="nav">
          <li className="nav-item-title">
            {/* Lien vers la page d'accueil avec path="/" */}
            <Link rel="preload" to="/" className={isActive('/') ? 'active' : ''}>
              Tom Ricouard
            </Link>
          </li>
          <div className="nav-item-right">
            <li className="nav-item">
              <Link rel="preload" to="/Projets" className={isActive('/Projets') ? 'active' : ''}>
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link rel="preload" to="/Infos" className={isActive('/Infos') ? 'active' : ''}>
                Infos
              </Link>
            </li>
          </div>
        </ul>
        <li className="nav-item-contact">
          <a href="mailto:contact@tomricouard.com">Contact ↗</a>
        </li>
      </nav>

      {/* Navbar Mobile */}
      <nav className="navbar-mobile">
        <li className="nav-item-title">
          {/* Lien vers la page d'accueil avec path="/" */}
          <Link rel="preload" to="/" className={isActive('/') ? 'active' : ''}>
            Tom Ricouard
          </Link>
        </li>
        <ul className="nav-item-right">
          <li className="nav-item">
            <Link rel="preload" to="/Projets" className={isActive('/Projets') ? 'active' : ''}>
              Projets
            </Link>
          </li>
          <li className="nav-item">
            <Link rel="preload" to="/Infos" className={isActive('/Infos') ? 'active' : ''}>
              Infos
            </Link>
          </li>
        </ul>
        <li className="nav-item-contact">
          <a href="mailto:contact@tomricouard.com">Contact ↗</a>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
