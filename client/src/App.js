import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import Register from './pages/register';
import Login from './pages/login'

import postImageExample from './components/images/example1.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import LeftSidebar from './components/LeftSideBar';

import 'animate.css/animate.min.css';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <>
            <div style={{ display: 'flex' }}>
              <LeftSidebar />
              <div className="hivebody">
                  <div>
                    <Header></Header>
                  </div>
                  <div>
                  <div className="postsection">
                    <div className="post-container">
                    <div className='createpostsection'>
                      <form>
                        <div className="mb-3">
                        <Form.Control
                            className='createpost rounded-pill'
                            type="post"
                            id="inputPost5"
                            placeholder='Create your post.'
                        />
                        <Button>Post</Button>
                        </div>
                      </form>
                    </div>
                      <h3>Example Post 1</h3>
                      <img src={postImageExample} alt="example" />
                      <div className="post-actions">
                        <Button>
                          <FontAwesomeIcon icon={faThumbsUp} /> Augment
                        </Button>
                        <Button>
                          <FontAwesomeIcon icon={faThumbsDown} /> Corrupt
                        </Button>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi in lacus eu nulla vulputate sagittis.
                      </p>
                      <div className="post-buttons">
                        <button className="btn btn-dark"><i className="fas fa-reply"></i> Reply</button>
                        <button className="btn btn-dark"><i className="fas fa-share"></i> Share</button>
                        <button className="btn btn-dark"><i className="far fa-bookmark"></i> Save</button>
                      </div>
                    </div>
                    <div id='rightbar' className='rightbar'>
                    <hr />
                      <h4>Current Community</h4>
                      <ul>
                        <li>CyberpunkCity</li>
                        <li>TheNeonDistrict</li>
                        <li>TechnoUtopia</li>
                      </ul>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App;

              
