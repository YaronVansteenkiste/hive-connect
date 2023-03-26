import React  from 'react'
import { FloatingLabel, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import './Header.css';

import exampleImage from './images/example1.jpg'

function Header ()  {
    return (
      <div className='navbar'>
        <ul class="navbar-nav ml-auto">
        </ul>
        <div className='topnavigationsection'>
        <Button variant="dark">Best</Button>
        <Button variant="dark">Hot</Button>
        <Button variant="dark">Top</Button>
        <Button variant="dark">...</Button>
        </div>
        <div className='profilesection'>
          <div className='profileicon'>
            <img src={exampleImage} alt="Profile Icon" className="neon-icon" />
          </div>
          <div className='profilename'>
            <span className="neon-text">Keanu Reeves</span>
            <label className='neon-subtext'>540 points augmented</label>
          </div>
        </div>
      </div>
    )
}

export default Header
