import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const SessionErrorsReducer = (preloadedState = [], action) => {
    Object.freeze(preloadedState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            console.log(action)
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return preloadedState;
    }
};

export default SessionErrorsReducer