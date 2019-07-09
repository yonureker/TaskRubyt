import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer.js';
import taskErrorsReducer from './task_errors_reducer.js';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  task: taskErrorsReducer
});

export default errorsReducer;