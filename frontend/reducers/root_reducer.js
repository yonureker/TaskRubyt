import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import taskersReducer from './taskers_reducer';
import currentTaskReducer from './current_task_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  taskers: taskersReducer,
  currentTask: currentTaskReducer
});

export default rootReducer;