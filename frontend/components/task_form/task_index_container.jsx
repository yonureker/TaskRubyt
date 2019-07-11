import { fetchAllTasks } from '../../actions/task_actions';
import { connect } from 'react-redux';
import TaskIndex from './task_index';
import React from 'react';

const mapStateToProps = (state) => ({
  tasks: Object.values(state.entities.tasks),
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => {
  return {
  fetchAllTasks: () => dispatch(fetchAllTasks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);