import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;