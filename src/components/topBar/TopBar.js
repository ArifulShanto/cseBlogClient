import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

const TopBar = () => {
    const { user, dispatch } = useContext(Context);
    const [aUser, setAUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setAUser(true);
        }
    }, [user]);
    const handleLogout = () => {
        dispatch({ type: "Logout" });
        localStorage.removeItem("user");
        navigate('/login'); 
        window.location.reload(true);
    }
    return (
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            {aUser && (
              <li className="topListItem" onClick={handleLogout}>
                LOGOUT
              </li>
            )}
          </ul>
        </div>
        <div className="topRight">
          {aUser ? (
            <Link className="link" to="/settings">
              <img className="topImg" src={user?.profilePic} alt="" />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          {/* <i className="topSearchIcon fas fa-search"></i> */}
        </div>
      </div>
    );
};

export default TopBar;