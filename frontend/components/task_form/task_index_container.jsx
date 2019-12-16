import { fetchAllTasks, deleteTask } from '../../actions/task_actions';
import { connect } from 'react-redux';
import TaskIndex from './task_index';
import React from 'react';
import { fetchAllCategories } from '../../actions/category_actions';

const mapStateToProps = (state) => ({
  tasks: Object.values(state.entities.tasks),
  currentUser: state.entities.users[state.session.id],
  taskers: Object.values(state.taskers),
  categories: state.entities.categories
});

const mapDispatchToProps = dispatch => {
  return {
  fetchAllTasks: () => dispatch(fetchAllTasks()),
  deleteTask: id => dispatch(deleteTask(id)),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);