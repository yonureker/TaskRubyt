import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);