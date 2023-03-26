import React, { useState } from 'react';
import { FloatingLabel, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import './Header.css';

import exampleImage from './images/example1.jpg';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className='navbar'>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fa fa-bell"></i>
            <span className="badge">3</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fa fa-comment"></i>
            <span className="badge">5</span>
          </a>
        </li>
      </ul>
      <div className='topnavigationsection'>
        <Button variant="dark">Best</Button>
        <Button variant="dark">Hot</Button>
        <Button variant="dark">Top</Button>
        <Button variant="dark">...</Button>
      </div>
      <div className='profilesection'>
        <div className='profileicon'>
          <img src={exampleImage} alt="Profile Icon" className="neon-icon" onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">My Profile</a>
              <a className="dropdown-item" href="#">Settings</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          )}
        </div>
        <div className='profilename'>
          <span className="neon-text">Keanu Reeves</span>
          <label className='neon-subtext'>540 points augmented</label>
        </div>
      </div>
    </div>
  );
}

export default Header;
