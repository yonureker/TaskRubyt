import {SAVE_TASK} from '../actions/task_actions';
import { saveState } from '../store/localStorage.js';

const currentTaskReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case SAVE_TASK:
      saveState(action.task);
      return action.task;
    default:
      return state;
  }
};

export default currentTaskReducer;