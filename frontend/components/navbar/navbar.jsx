import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const showLinks = () => (
    <nav className="navigation-bar">
      <div className="navigation-bar-left">
        <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9151d6578f32165ee641db37cc2f3322/taskrabbit.jpg" height="64" width="100"/>
     </div>

     <div className="navigation-bar-right">
        <span><Link to="/login">Login</Link></span>
        <span><Link to="/signup">Sign up!</Link></span>
     </div>
    </nav>
  );
  const welcomeUser = () => (
    <nav className="navigation-bar">
      <div className="navigation-bar-left">
        <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9151d6578f32165ee641db37cc2f3322/taskrabbit.jpg" height="64" width="100"/>
     </div>

      <div className="navigation-bar-right">
      <span><Link to="/mytasks">My Tasks</Link></span>
      <span><Link to="/account">Account</Link></span>
      {/* <Link to='/'>
      <button className="header-button" onClick={logout}>Log Out</button>
      </Link> */}
      </div>
    </nav>
  );

  return currentUser ? welcomeUser() : showLinks();
};


export default NavBar;