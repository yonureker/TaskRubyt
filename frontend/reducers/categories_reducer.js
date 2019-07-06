import { RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';
import merge from 'lodash/merge';

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  const { category, categories } = action;

  switch(action.type) {
    case RECEIVE_CATEGORY:
      return merge({}, state, { [category.id]: category} );
    case RECEIVE_ALL_CATEGORIES:
      return categories;
    default:
      return state;
  }
}

export default categoriesReducer;