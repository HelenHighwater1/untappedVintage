import { RECEIVE_BEERS, RECEIVE_BEER } from '../actions/beer_actions';

const BeersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BEERS:
            return action.beers;
        case RECEIVE_BEER:
            const newBeer = { [action.beer.id]: action.beer };
            return Object.assign({}, state, newBeer);
        default:
            return state;
    }
};

export default BeersReducer;
