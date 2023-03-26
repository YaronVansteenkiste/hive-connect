import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './pages/register';

import postImageExample from './components/images/example1.jpg'
import postImageExample2 from './components/images/example2.jpg'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
            <>
              <Header />
              <div className="hivebody">
                <div className="leftbar">
                  <h4>Notifications</h4>
                  <ul>
                    <li>New message from user123</li>
                    <li>You have a new follower!</li>
                    <li>Your post has been featured!</li>
                  </ul>
                </div>
                <div className='createpostsection'>
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" id="post-title" placeholder="Create post"/>
                    </div>
                  </form>
                </div>
                <div className="postsection">
                  <div className="post">
                    <h3>Example Post 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi in lacus eu nulla vulputate sagittis.
                    </p>
                    <div className="post-actions">
                      <button className="like-btn">
                        <i className="far fa-thumbs-up"></i> Augment
                      </button>
                      <button className="dislike-btn">
                        <i className="far fa-thumbs-down"></i> Corrupt
                      </button>
                    </div>
                    <img src={postImageExample} alt="example" />
                  </div>
                  <div className="post">
                    <h3>Example Post 2</h3>
                    <p>
                      Suspendisse tincidunt odio sed leo pharetra porttitor.
                      Fusce vel tristique felis. Fusce lacinia sagittis orci,
                      ac mattis est bibendum at.
                    </p>
                    <div className="post-actions">
                      <button className="like-btn">
                        <i className="far fa-thumbs-up"></i> Augment
                      </button>
                      <button className="dislike-btn">
                        <i className="far fa-thumbs-down"></i> Corrupt
                      </button>
                    </div>
                    <img src={postImageExample2} alt="example" />
                  </div>
                </div>
                <div className='rightbar'>
                    <hr />
                    <h4>Current Community</h4>
                    <ul>
                      <li>CyberpunkCity</li>
                      <li>TheNeonDistrict</li>
                      <li>TechnoUtopia</li>
                    </ul>
                  </div>
              </div>
            </>
          }/>
        </Routes>
    </Router>
  )
}

export default App;
              
