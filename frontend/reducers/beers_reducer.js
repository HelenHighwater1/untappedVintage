import { RECEIVE_BEERS, RECEIVE_BEER, REMOVE_BEER } from '../actions/beer_actions';

const BeersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BEERS:
            return action.beers;
        case RECEIVE_BEER:
            const newBeer = { [action.beer.id]: action.beer };
            return Object.assign({}, state, newBeer);
        case REMOVE_BEER:
            const nextState = Object.assign({}, state)
            delete nextState[action.beerId]
            return nextState;
        default:
            return state;
    }
};

export default BeersReducer;
