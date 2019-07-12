import {RECEIVE_TASKER, RECEIVE_ALL_TASKERS} from '../actions/user_actions';
import {merge} from 'lodash';

const taskersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_TASKERS:
            return merge(action.users);
        case RECEIVE_TASKER:
            return merge( {}, state, { [user.id]: action.user});
        default: 
            return state;
    }
};

export default taskersReducer;