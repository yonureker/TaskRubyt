import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import SplashHeroContainer from './splash_hero_container';
import SearchBar from './search_bar';
import LoginFormContainer from '../session_form/login_form_container.jsx';
import SignupFormContainer from '../session_form/signup_form_container';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';

class SplashPage extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="splash-page">
        <NavBarContainer />
        <SplashHeroContainer />
      </div>
    )
  }
}

export default SplashPage;

