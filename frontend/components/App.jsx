import React from 'react';
// import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container';
import AccountContainer from './account/account_container';
import TaskFormContainer from './task_form/task_form_container';
import PickTaskerContainer from './task_form/pick_tasker_container';
import ConfirmTaskContainer from './task_form/confirm_task_container';
import TaskIndexContainer from './task_form/task_index_container';
import SplashPage from './splash_page/splash_page.jsx';
import Footer from './footer/footer';
import NavBarContainer from './navbar/navbar_container'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="page-content">
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/task-form" component={TaskFormContainer} render />
      <AuthRoute exact path="/pick-tasker" component={PickTaskerContainer} />
      <AuthRoute exact path="/account" component={AccountContainer} />
      <AuthRoute exact path='/confirm-task' component={ConfirmTaskContainer} />
      <AuthRoute exact path='/mytasks' component={TaskIndexContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;