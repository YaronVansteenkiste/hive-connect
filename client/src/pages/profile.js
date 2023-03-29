import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../axios";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../components/context/UserContext.js";
import Update from "../components/update/Update.js";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ProfilePictureUpload from '../components/update/ProfilePictureUpload.js'
import axios from "axios";


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

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("http://localhost:8800/api/users/find/1", {
        withCredentials: true,
      });
      setUser(res.data);
    };
    fetchUser();
  }, []);




  return (
    <div className="profile">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <h1>{user.name}'s Profile</h1>
            <img src={user.profilePic} alt="Profile" />
            <ProfilePictureUpload />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="center">
                <span>{data.name}</span>
                <div className="info">
                </div>
              </div>
              <div className="right">
              </div>
            </div>
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;