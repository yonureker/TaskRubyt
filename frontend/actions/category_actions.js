import * as categoryAPIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
})

export const receiveAllCategories = (categories) => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
})

export const fetchAllCategories = () => dispatch => (
  categoryAPIUtil.fetchAllCategories().then(categories => (
    dispatch(receiveAllCategories(categories))
  )
  ));

export const fetchCategory = id => dispatch => (
  categoryAPIUtil.fetchCategory(id).then(category => (
    dispatch(receiveCategory(category))
  )
  ));
