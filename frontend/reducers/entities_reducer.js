import { combineReducers } from 'redux'
import UsersReducer from './users_reducer'
import BeersReducer from './beers_reducer'
import BreweriesReducer from './breweries_reducer'
import ReviewsReducer from './reviews_reducer'

const entitiesReducer = combineReducers({
    users: UsersReducer,
    breweries: BreweriesReducer,
    beers: BeersReducer,
    reviews: ReviewsReducer, 
    vintages: ReviewsReducer
});

export default entitiesReducer;
