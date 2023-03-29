import LeftSidebar from "../components/LeftSideBar";
import Header from "../components/Header";
import Post from "./post";
import RightSideBar from "../components/RightSideBar";

const Home = () => {


    return (
        <div style={{ display: 'flex' }}>
              <LeftSidebar />
              <div className="hivebody">
                  <div>
                    <Header></Header>
                  </div>
                  <div>
                  <div className="postsection">
                    <Post></Post>
                    <RightSideBar></RightSideBar>
                  </div>
                
                </div>
              </div>
            </div>
    )
}

export default Home;