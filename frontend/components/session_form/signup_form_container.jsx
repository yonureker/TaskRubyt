import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    // errors: errors,
    formType: 'signup',
    navLink: <Link to="/login">Log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);