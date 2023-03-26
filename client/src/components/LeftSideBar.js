import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faNetworkWired, faNewspaper, faFire, faSearch} from "@fortawesome/free-solid-svg-icons";
import { FloatingLabel, Form } from "react-bootstrap";
import './LeftSideBar.css'


function LeftSidebar() {
  return (
    <div className="leftsidebar">
      <h5 className="logo">Hive</h5>
      <form className="form-inline mb-4">
        <div className="input-group">
        <FloatingLabel className='searchtext' controlId="floatingInputGrid" label="Search Network..">
              <Form.Control className='searchbar' placeholder="Search Community" />
            </FloatingLabel>
          <div className="input-group-append">
            <button className="btn  rounded-0" type="button"><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>
      </form>
      <ul className="list-unstyled">
        <li className="mb-2">
          <button className="btn leftsidebuttons w-100 rounded-0"><FontAwesomeIcon icon={faHome} className="mr-2" />Home</button>
        </li>
        <li className="mb-2">
          <button className="btn leftsidebuttons w-100 rounded-0"><FontAwesomeIcon icon={faNetworkWired} className="mr-2" />Network</button>
        </li>
        <li className="mb-2">
          <button className="btn leftsidebuttons w-100 rounded-0"><FontAwesomeIcon icon={faNewspaper} className="mr-2" />News</button>
        </li>
        <li className="mb-2">
          <button className="btn leftsidebuttons w-100 rounded-0"><FontAwesomeIcon icon={faFire} className="mr-2" />Hot</button>
        </li>
      </ul>
      <hr className="leftsidebuttons" />
      <h6 className="text-light mb-3">My networks</h6>
      <ul className="list-unstyled">
        <li className="mb-2">
          <a href="#" className="text-light">Example Community 1</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-light">Example Community 2</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-light">Example Community 3</a>
        </li>
      </ul>
    </div>
  );
}

export default LeftSidebar;