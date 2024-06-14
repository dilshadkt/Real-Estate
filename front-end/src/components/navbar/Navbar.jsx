import React, { useContext, useState } from "react";
import "./navabar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const notification = useNotificationStore((state) => state.number);
  if (currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Real Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.png"} alt="" />
            <span> {currentUser.username}</span>
            <Link to="/profile" className="profile">
              {notification > 0 && (
                <div className="notification">{notification}</div>
              )}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign Out
            </a>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
        <div className={`${isOpen ? "menu active" : `menu `} `}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
