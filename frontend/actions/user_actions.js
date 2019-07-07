import * as userAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const fetchAllUsers = () => dispatch => (
  userAPIUtil.fetchAllUsers().then(users => (
    dispatch(receiveAllUsers(users))
  ))
);








