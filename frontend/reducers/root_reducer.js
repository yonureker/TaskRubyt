import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';


// Not needed
// import sessionErrorsReducer from './session_errors_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  users: usersReducer,
  tasks: tasksReducer
});

export default rootReducer;