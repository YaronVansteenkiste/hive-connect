import React, { useContext, useEffect, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faFire, faWind, faEllipsis } from '@fortawesome/free-solid-svg-icons';

import { UserContext } from './context/UserContext.js'

import './Header.css';

import exampleImage from './images/example1.jpg';

import Update from "../components/update/Update.js"

import axios from 'axios';
import { makeRequest } from "../axios.js";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";




function Header() {

  const { login } = useContext(UserContext);
  const { setCurrentUser } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);

  const [openUpdate, setOpenUpdate] = useState(false);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + currentUser.id).then((res) => {
      return res.data;
    })
  );

  const logout = async () => {
    await axios.post("http://localhost:8800/api/auth/logout",  {
      withCredentials: true,
    });
    localStorage.clear();
    setCurrentUser(null);
  }

  const username = localStorage.getItem('user');

  function dropDownClick() {
    document.getElementById('myDropdown').classList.toggle("show");
    document.getElementById('rightbar').classList.toggle('expand');
  }

  return (
    <div className='navbar'>
      <ul className="navbar-nav ml-auto">
      </ul>
      <Stack direction='horizontal' gap='3'>
        <Button variant="dark"><FontAwesomeIcon icon={faRocket} /> Best</Button>
        <Button variant="dark"><FontAwesomeIcon icon={faFire} /> Hot</Button>
        <Button variant="dark"><FontAwesomeIcon icon={faWind} /> Top</Button>
        <Button variant="dark"> <FontAwesomeIcon icon={faEllipsis} /> </Button>
      </Stack>
      {username ? (
        <div className='profilesection' onClick={dropDownClick}>
          <div className='profileicon'>
            <img src={"/upload/"+currentUser
            .coverPic} alt="Profile Icon" className="neon-icon" />
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
    </div>
  );
}

export default Header;
