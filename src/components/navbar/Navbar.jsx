import React, { useState } from "react";
import "./navabar.scss";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <a>Sign in</a>
        <a className="register">Sign Out</a>
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
