import * as userAPIUtil from '../util/user_api_util';
export const RECEIVE_ALL_TASKERS = 'RECEIVE_ALL_TASKERS';
export const RECEIVE_TASKER = "RECEIVE_TASKER";

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_TASKERS,
  users
})

export const receiveUser = user => ({
  type: RECEIVE_TASKER,
  user
})

export const fetchAllUsers = () => dispatch => (
  userAPIUtil.fetchAllUsers().then(users => (
    dispatch(receiveAllUsers(users))
  ))
);

export const fetchUser = id => dispatch => (
  userAPIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)))
)








