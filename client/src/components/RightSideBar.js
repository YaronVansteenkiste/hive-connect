import React from "react";
import './RightSideBar.css'
import { Button } from 'react-bootstrap'
import exampleCover from './images/example3.jpg'
import { useNavigate } from "react-router-dom";

function RightSideBar() {
  const history = useNavigate();

  function goCreate() {
    history("/submit");
  }

  return (
    <div id='rightbar' className='rightbar'>
    <img className="cover-image" src={exampleCover} alt="example"/>
      <h3>CyberpunkCity</h3>
      <div className="rightbartop">
        <hr></hr>
        <h5>About Network</h5>
        <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
        <hr></hr>
        <h5>Members</h5>
        <label>35.4k</label>
        <hr></hr>
        <h5>Augmented</h5>
        <label>56.3M</label>
        <hr></hr>
        <Button onClick= {goCreate}>Create Post</Button>
        <hr></hr>
        <hr></hr>
        <h5>Rules</h5>
        <ul>
          <li>
            1. Lorem ipsum dolor sit amet
          </li>
          <li>
            2. Consectetur adipiscing elit
          </li>
          <li>
            3. Ed do eiusmod tempor incididunt
          </li>
          <li>
            4. ut labore et dolore magna aliqua
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightSideBar;