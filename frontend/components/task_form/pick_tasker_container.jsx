import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import PickTaskerIndex from './pick_tasker_index';

const mapStateToProps = (state,ownProps) => {

return {
  taskers: Object.values(state.taskers),
  currentTask: state.currentTask,
};

};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    clearFetchtaskers: () => dispatch(fetchAllUsers([])),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PickTaskerIndex);