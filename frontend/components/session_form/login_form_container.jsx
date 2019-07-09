import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);