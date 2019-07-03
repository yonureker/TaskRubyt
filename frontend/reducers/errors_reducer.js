import {combineReducers} from 'redux';

import sessionErrorsReducer from './session_errors_reducer.js';

const errorsReducer = combineReducers({
  session: sessionErrorReducer
});

export default errorsReducer;