import { combineReducers } from 'redux'
import SessionReducer from './session_reducer'
import ErrorsReducer from './errors_reducer'
import UsersReducer from './users_reducer'
import BeersReducer from './beers_reducer'


const rootReducer = combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer,
    users: UsersReducer,
    beers: BeersReducer
});

export default rootReducer;
