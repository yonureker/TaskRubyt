import React from 'react';
import {connect} from 'react-redux';
import TaskForm from './task_form';
import { fetchTask, createTask } from '../../actions/task_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTask: (id) => dispatch(fetchTask(id)),
  createTask: task => dispatch(createTask(task)),
  fetchCategory: (id) => dispatch(fetchCategory(id))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(TaskForm);


