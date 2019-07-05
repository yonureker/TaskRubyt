import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Account from './account';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id] //this was currentUser: users[session.currentUser.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  processForm: (user) => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);