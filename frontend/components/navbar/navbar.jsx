import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {
  const showLinks = () => (
    <nav className="navigation-bar">
      <div className="navigation-bar-left">
        <img
          src="https://i.ibb.co/G9Q7mbk/diamond2.png"
          className="diamond"
          border="0"
          height="30"
          width="27"
        />
        <strong className="text">
          Task<span className="greeny">Rubyt</span>
        </strong>
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
        <img
          src="https://i.ibb.co/G9Q7mbk/diamond2.png"
          className="diamond"
          border="0"
          height="30"
          width="27"
        />
        <strong className="text">
          Task<span className="greeny">Rubyt</span>
        </strong>
      </div>

      <div className="navigation-bar-right">
        <span>
          <Link to="/mytasks">My Tasks</Link>
        </span>
        <span>
          <Link to="/account">Account</Link>
        </span>
        {/* <Link to='/'>
      <button className="header-button" onClick={logout}>Log Out</button>
      </Link> */}
      </div>
    </nav>
  );

  return currentUser ? welcomeUser() : showLinks();
};

export default NavBar;
