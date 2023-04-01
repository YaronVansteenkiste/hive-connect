import LeftSidebar from "../components/LeftSideBar";
import Header from "../components/Header";
import Post from "../components/post";
import RightSideBar from "../components/RightSideBar";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import exampleImage from '../components/images/example1.jpg'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function goCreate() {
    navigate("/submit");
  }
  return (
    <div style={{ display: 'flex' }}>
      <LeftSidebar />
      <div className="hivebody">
        <div>
          <Header></Header>
        </div>
        <div className="postcontainer">
          <div className="postsection">
            <div className="createpostcontainer">
              <div className='createprofileicon'>
                <img src={exampleImage} alt="Profile Icon" className="neon-icon" />
              </div>
              <FloatingLabel onClick={goCreate} className='searchtext' controlId="floatingInputGrid" label="Create Post..">
                <Form.Control className='searchbar' placeholder="Create Post.." />
              </FloatingLabel>
            </div>
            <Post></Post>
          </div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  )
}

export default Home;
