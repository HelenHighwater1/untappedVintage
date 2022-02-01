import { combineReducers } from 'redux'
import UsersReducer from './users_reducer'
import BeersReducer from './beers_reducer'
import BreweriesReducer from './breweries_reducer'

const entitiesReducer = combineReducers({
    users: UsersReducer,
    breweries: BreweriesReducer,
    beers: BeersReducer
});

export default entitiesReducer;
