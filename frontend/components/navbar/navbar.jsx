import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {
  const showLinks = () => (
    <nav className="navigation-bar">
      <div className="navigation-bar-left">
      <Link to="/">
        <img
          src="https://i.ibb.co/Jtx4xZr/Screen-Shot-2019-12-13-at-12-16-03-PM.png"
          border="0"
          height="50"
          width="185"
        /></Link>
        {/* <strong className="text">
          Task<span className="greeny">Rubyt</span>
        </strong> */}
      </div>

      <div className="navigation-bar-right">
        <span>
          <Link to="/login">Log In</Link>
        </span>
        <span>
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </nav>
  );
  const welcomeUser = () => (
    <nav className="navigation-bar">
      <div className="navigation-bar-left">
      <Link to="/">
        <img
          src="https://i.ibb.co/Jtx4xZr/Screen-Shot-2019-12-13-at-12-16-03-PM.png"
          border="0"
          height="50"
          width="185"
        /></Link>
      </div>

      <div className="navigation-bar-right">
        <span>
          <Link to="/mytasks">My Tasks</Link>
        </span>
        <span>
          <Link to="/account">Account</Link>
        </span>
      </div>
    </nav>
  );

  return currentUser ? welcomeUser() : showLinks();
};

export default NavBar;
