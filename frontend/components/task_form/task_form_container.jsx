import {connect} from 'react-redux';
import TaskForm from './task_form';
import { fetchTask, createTask } from '../../actions/task_actions';
import { fetchAllUsers } from '../../actions/user_actions';  


const mapStateToProps = ({session, errors, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    errors: errors.task
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTask: (id) => dispatch(fetchTask(id)),
  createTask: task => dispatch(createTask(task)),
  fetchCategory: (id) => dispatch(fetchCategory(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(TaskForm);


