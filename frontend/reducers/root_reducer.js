import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import usersReducer from './users_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: sessionErrorsReducer,
  users: usersReducer
});

export default rootReducer;