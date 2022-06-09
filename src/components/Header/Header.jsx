import React from "react";
import { Link } from "react-router-dom";
import userAvatar from "../../images/AvatarMaker.png";
import "./header.css";
function Header() {
  //write code here

  return (
    <header>
      <div className="container">
        <Link to="/">
          <div className="header-logo">Movie App</div>
        </Link>
        <div className="user-avatar">
          <img src={userAvatar} alt="user avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
