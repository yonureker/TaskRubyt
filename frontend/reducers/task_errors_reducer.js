import { RECEIVE_TASK, RECEIVE_TASK_ERRORS } from '../actions/task_actions';
import { REMOVE_ERRORS } from '../actions/session_actions';

const taskErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK_ERRORS:
      return action.errors;
    case RECEIVE_TASK:
      return [];
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
}

export default taskErrorsReducer;