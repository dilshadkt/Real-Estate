import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./updateProfile.scss";
import UploadWidget from "../../uploadWidget/UploadWidget";
import apiRequest from "../../../lib/apiRequest";
const UpdateProfile = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fomData = new FormData(e.target);
    const { username, password, email } = Object.fromEntries(fomData);
    try {
      const res = await apiRequest.put(`user/${currentUser.id}`, {
        username,
        password,
        email,
        avatar: avatar[0],
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.png"}
          alt=""
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "dob1zdjnp",
            uploadPreset: "realestate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default UpdateProfile;
