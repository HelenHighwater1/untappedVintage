import { RECEIVE_BEERS, RECEIVE_BEER, RECEIVE_REVIEW } from '../actions/beer_actions';

const BeersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BEERS:
            return action.beers;
        case RECEIVE_BEER:
            const newBeer = { [action.beer.id]: action.beer };
            return Object.assign({}, state, newBeer);
        case RECEIVE_REVIEW:
            const { review } = action;
            const newState = Object.assign({}, state);
            newState[review.beer_id].reviewIds.push(review.id);
            return newState;
        default:
            return state;
    }
};

export default BeersReducer;
