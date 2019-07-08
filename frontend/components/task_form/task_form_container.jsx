import {connect} from 'react-redux';
import TaskForm from './task_form';
import { fetchTask, createTask, updateTask, fetchAllTasks, deleteTask } from '../../actions/task_actions';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';  
import { fetchAllCategories, fetchCategory } from '../../actions/category_actions'
import { removeErrors } from '../../actions/session_actions';

const mapStateToProps = ({session, errors, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    errors: errors.task
  }
}

const mapDispatchToProps = dispatch => ({
  //sending everything for now  
  createTask: task => dispatch(createTask(task)),
  updateTask: task => dispatch(updateTask(task)),
  fetchAllTasks: () => dispatch(fetchAllTasks()),
  fetchTask: (id) => dispatch(fetchTask(id)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  fetchCategory: (id) => dispatch(fetchCategory(id)),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: (id) => fetchUser(id),
  removeErrors: () => removeErrors()
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(TaskForm);


