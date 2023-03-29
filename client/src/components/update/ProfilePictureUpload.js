import React, { useState } from "react";
import axios from "axios";

const ProfilePictureUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
        const res = await axios.post("http://localhost:8800/api/users/update-profile-pic", formData, {
            withCredentials: true,
        });
        console.log(res.data);
        window.location.reload();
    } catch (err) {
        console.log(err.response.data);
    }
};


  return (
    <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit">Upload Profile Picture</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default ProfilePictureUpload;
