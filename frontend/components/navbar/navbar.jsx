import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
  const showLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const greetUser = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? greetUser() : showLinks();
};


export default Navbar;