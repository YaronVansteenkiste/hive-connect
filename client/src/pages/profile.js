import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../components/context/UserContext.js";
import Update from "../components/update/Update.js";
import ProfilePictureUpload from '../components/update/ProfilePictureUpload.js'
import './profile.css'
import examplePic from '../components/images/example1.jpg'
import LeftSidebar from "../components/LeftSideBar";
import Header from "../components/Header";
import RightSideBar from "../components/RightSideBar";


const Profile = () => {
  const [user, setUser] = useState({});
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(UserContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div style={{ display: 'flex' }}>
      <LeftSidebar />
      <div className="hivebody">
        <Header></Header>
        <div className="postcontainer">
          <RightSideBar></RightSideBar>
        </div>
        <div className="profile">
          {isLoading ? (
            "loading"
          ) : (
            <>
              <div className="profile-header">
                <h1 className="profile-title">{data.username}'s Profile</h1>
                <div className="profile-picture">
                  <img src={examplePic} alt="Profile" />
                  <ProfilePictureUpload />
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-section">
                  <h2>Basic Information</h2>
                  <div className="profile-data">
                    <div className="profile-label">Name:</div>
                    <div className="profile-value">{data.name}</div>
                  </div>
                  <div className="profile-data">
                    <div className="profile-label">Email:</div>
                    <div className="profile-value">{data.email}</div>
                  </div>
                  <div className="profile-data">
                    <div className="profile-label">Bio:</div>
                    <div className="profile-value">{data.bio}</div>
                  </div>
                </div>
                <div className="profile-section">
                  <h2>Contact Information</h2>
                  <div className="profile-data">
                    <div className="profile-label">Phone:</div>
                    <div className="profile-value">{data.phone}</div>
                  </div>
                  <div className="profile-data">
                    <div className="profile-label">Address:</div>
                    <div className="profile-value">{data.address}</div>
                  </div>
                </div>
                <div className="profile-actions">
                  <button
                    className="profile-edit-btn"
                    onClick={() => setOpenUpdate(true)}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </>
          )}
          {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
