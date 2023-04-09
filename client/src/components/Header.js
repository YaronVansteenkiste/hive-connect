import React, { useContext } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faFire, faWind, faEllipsis, faPlus, faMessage, faMobile, faFaceLaugh } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './context/UserContext.js'
import './Header.css';
import exampleImage from './images/example1.jpg';
import axios from 'axios';



function Header() {

  const { setCurrentUser } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);


  const logout = async () => {
    await axios.post("http://localhost:8800/api/auth/logout", {
      withCredentials: true,
    });
    localStorage.clear();
    setCurrentUser(null);
  }

function dropDownClick() {
  document.getElementById('myDropdown').classList.toggle("show");
  document.getElementById('rightbar').classList.toggle('expand');
}

return (
  <Navbar className='header' expand="lg">
    <Container fluid>
      <Navbar.Toggle className='header-toggler' aria-controls="navbarScroll" />
      <Navbar.Collapse className='headercollapse' id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <div className='filters'>
                <Button className='headerbuttons' variant="dark"><FontAwesomeIcon icon={faRocket} /> Best</Button>
                <Button className='headerbuttons' variant="dark"><FontAwesomeIcon icon={faFire} /> Hot</Button>
                <Button className='headerbuttons' variant="dark"><FontAwesomeIcon icon={faWind} /> Top</Button>
                <Button className='headerbuttons' variant="dark"> <FontAwesomeIcon icon={faEllipsis} /> </Button>
            </div>
        </Nav>
        <div className='quickprofile'>
                <Button className='headerbuttons' variant="warning"><FontAwesomeIcon icon={faPlus} /></Button>
                <Button className='headerbuttons' variant="warning"><FontAwesomeIcon icon={faMessage} /></Button>
                <Button className='headerbuttons' variant="warning"><FontAwesomeIcon icon={faMobile} /></Button>
                <Button className='headerbuttons' variant="warning"> <FontAwesomeIcon icon={faFaceLaugh} /> </Button>
            </div>
        {currentUser ? ( 
          <div className='profilesection' onClick={dropDownClick}>
            <div className='profileicon'>
              <img src={exampleImage} alt="Profile Icon" className="neon-icon" />
            </div>
            <div className='profilename'>
              <div className='usernameSection'>
                <span className="neon-text">{currentUser.username}</span>
              </div>
              <div>
                <label id='credittag' className='neon-subtext'>{currentUser.credits} credits augmented</label>
              </div>
            </div>
            <div id='myDropdown' className='dropdown-content'>
              <a href='/users/1'>Profile</a>
              <a href='/settings'>User Settings</a>
              <hr></hr>
              <a href='/'>Create Network</a>
              <a href='/'>Credits</a>
              <a href='/'>CyberSub</a>
              <a href='/'>Support</a>
              <a href="/" onClick={logout}>Logout</a>
            </div>
          </div>
        ) : (
          <div className='profilesection' onClick={dropDownClick}>
            <div className='profilename'>
              <div className='usernameSection'>
                <span className="neon-text">Login/Register</span>
              </div>
            </div>
            <div id='myDropdown' className='dropdown-content'>
              <a href='/login'>Login</a>
              <a href='/register'>Register</a>
            </div>
          </div>
        )}
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Header;
