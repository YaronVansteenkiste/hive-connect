import React  from 'react'
import { FloatingLabel } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import './Header.css';

import exampleImage from './images/example1.jpg'

function Header ()  {
    return (
      <div className='navbar'>
        <div className='logosection'>
          Hive
        </div>
        <div className='searchsection'>
        <FloatingLabel className='searchtext' controlId="floatingInputGrid" label="Search Community..">
              <Form.Control className='searchbar' placeholder="Search Community" />
            </FloatingLabel>
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
