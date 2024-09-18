import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
    <nav className="navbar">
   
    <ul className="nav">
    <li className="nav-item-title"><a href="#">Tom Ricouard</a></li>
    <ul className="nav-item-right"> 
      <li className="nav-item"><a href="#">Projets</a></li>
    <li className="nav-item"><a href="#">À propos</a></li></ul>
    </ul>
    <li className="nav-item-contact"><a href="#">Contact ↗</a></li>
  </nav>
    </header>

  )
}

export default Navbar