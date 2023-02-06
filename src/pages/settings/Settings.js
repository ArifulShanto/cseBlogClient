import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./settings.css";

const Settings = () => {
  const { user } = useContext(Context);
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

  const handleImageChange = (e) => {
    e.preventDefault();
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("thumbnailImage", img);
    axios.post("/upload", formData).then(function (res) {
      console.log(res.data.location);
      setProfilePic(res.data.location);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username: username,
      email: email,
      password: password,
      profilePic: profilePic,
    };
    axios.put("/users/" + user._id, updatedUser).then((res) => {
      localStorage.removeItem("user");
      navigate("/login");
      window.location.reload(true);
    });
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          {/* <span className="settingsTitleDelete">Delete Account</span> */}
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {profilePic && <img src={profilePic} alt="" />}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={handleImageChange}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
