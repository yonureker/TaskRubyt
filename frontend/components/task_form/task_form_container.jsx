import {connect} from 'react-redux';
import TaskForm from './task_form';
import { saveTask, fetchTask, createTask, updateTask, fetchAllTasks, deleteTask } from '../../actions/task_actions';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';  
import { fetchAllCategories, fetchCategory } from '../../actions/category_actions'
import { removeErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentTask: state.currentTask,
  }
}

const mapDispatchToProps = dispatch => ({
  //sending everything for now  
  saveTask: task => dispatch(saveTask(task)),
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


