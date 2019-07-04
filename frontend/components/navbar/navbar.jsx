import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
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


export default NavBar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = ({ currentUser, logout, history, match }) => {
//   if (currentUser) {
//     const onClick = (e) => {
//       logout(currentUser)
//         .then(() => history.push('/'));
//     }

//     return (
//       <div className="nav-bar">
//         <Link to="/dashboard"><img className="nav-bar-logo" src=""/></Link>
//         <button className="logout-button" onClick={onClick}>Log Out</button>
//       </div>
//     )
//   } else {
//     return (
//       <div className="nav-bar">
//         <Link to="/"><img className="nav-bar-logo" src=""/></Link>
//         <div className="session-buttons">
//           <Link to="/login">Log In</Link>
//           <Link to="/signup"><button>Sign Up</button></Link>
//         </div>
//       </div>
//     )
//   }
// }

// export default NavBar;