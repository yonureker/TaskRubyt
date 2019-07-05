import * as taskAPIUtil from '../util/task_api_util';
import * as userAPIUtil from '../util/user_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';
export const REMOVE_TASK = 'REMOVE_TASK'

export const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task
})

export const receiveAllTasks = (tasks) => ({
  type: RECEIVE_ALL_TASKS,
  tasks
})

export const receiveTaskErrors = (errors) => ({
  type: RECEIVE_TASK_ERRORS,
  errors
})

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id
})

export const createTask = task => dispatch => (
  taskAPIUtil.createTask(task).then(task => (
    dispatch(receiveTask(task))
  ), errors => (dispatch(receiveTaskErrors(errors.responseJSON))
  ))
);

export const fetchAllTasks = () => dispatch => (
  taskAPIUtil.fetchAllTasks().then(tasks => (
    dispatch(receiveAllTasks(tasks))
  )
  ));

export const fetchTask = id => dispatch => (
  taskAPIUtil.fetchTask(id).then(task => (
    dispatch(receiveTask(task))
  )
  ));

export const deleteTask = id => dispatch => (
  taskAPIUtil.deleteTask(id).then(task => (
    dispatch(removeTask(task.id))
  )
  ));







