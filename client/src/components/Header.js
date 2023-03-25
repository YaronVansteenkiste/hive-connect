import React  from 'react'
import { FloatingLabel } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import './Header.css';

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
            profile icon
          </div>
          <div className='profilename'>
            profile name
          </div>
        </div>
      </div>
    )
}

export default Header
