import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function NavBar() {
  return (
    <nav>
      <div className="navbar-container">
        <ul className="social-links">
          <li><a href="https://www.linkedin.com/in/julian-gonzalez-b49665203/" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/jgonz671" target="_blank">GitHub</a></li>
        </ul>
        <ul className="navigation-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;