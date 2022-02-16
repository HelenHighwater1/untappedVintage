import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import BeerErrorsReducer from './beer_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    beers: BeerErrorsReducer
});
export default ErrorsReducer;