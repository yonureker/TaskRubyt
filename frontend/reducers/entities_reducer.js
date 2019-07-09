// frontend/reducers/entities_reducer.jsx
import { combineReducers } from 'redux';
import categoriesReducer from './categories_reducer';
import tasksReducer from './tasks_reducer';
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  categories: categoriesReducer
});

export default entitiesReducer;