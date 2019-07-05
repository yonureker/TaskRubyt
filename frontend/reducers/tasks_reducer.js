import { RECEIVE_TASK, RECEIVE_ALL_TASKS, REMOVE_TASK } from '../actions/task_actions';
import merge from 'lodash/merge';


const tasksReducer = (state = {}, action) => {
    Object.freeze(state);
    const { task, tasks, id } = action;

    switch (action.type) {
        case RECEIVE_TASK:
            return merge({}, state, { [task.id]: task });
        case RECEIVE_ALL_TASKS:
            return tasks;
        case REMOVE_TASK:
            let newState = merge({}, state);
            delete newState[id];
            return newState;
        default:
            return state;
    }
};

export default tasksReducer;