import React from 'react';
import { Button } from 'react-bootstrap';

import './Header.css';

import exampleImage from './images/example1.jpg';

function Header() {
  function dropDownClick() {
    document.getElementById('myDropdown').classList.toggle("show");
    document.getElementById('rightbar').classList.toggle('expand');
  } 
  return (
    <div className='navbar'>
      <ul className="navbar-nav ml-auto">
      </ul>
      <div className='topnavigationsection'>
        <Button variant="dark">Best</Button>
        <Button variant="dark">Hot</Button>
        <Button variant="dark">Top</Button>
        <Button variant="dark">...</Button>
      </div>
      <div className='profilesection' onClick={dropDownClick}>
        <div className='profileicon'>
          <img src={exampleImage} alt="Profile Icon" className="neon-icon"/>
        </div>
        <div className='profilename'>
          <div className='usernameSection'>
            <span className="neon-text">Keanu Reeves</span>
          </div>
          <div>
          <label className='neon-subtext'>540 points</label>
          </div>
        </div>
        <div id='myDropdown' className='dropdown-content'>
          <a href='/login'>Login</a>
          <a href='/register'>Register</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
