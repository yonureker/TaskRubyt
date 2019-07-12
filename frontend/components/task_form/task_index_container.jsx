import { fetchAllTasks, deleteTask } from '../../actions/task_actions';
import { connect } from 'react-redux';
import TaskIndex from './task_index';
import React from 'react';

const mapStateToProps = (state) => ({
  tasks: Object.values(state.entities.tasks),
  currentUser: state.entities.users[state.session.id],
  taskers: Object.values(state.taskers)
});

const mapDispatchToProps = dispatch => {
  return {
  fetchAllTasks: () => dispatch(fetchAllTasks()),
  deleteTask: id => dispatch(DeleteTask(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);