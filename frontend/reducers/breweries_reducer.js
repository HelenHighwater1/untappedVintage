import { RECEIVE_BREWERIES } from "../actions/brewery_actions";


const BreweriesReducer = (state= [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BREWERIES:
            
            return action.breweries;
        default:
            return state;
    }
}


export default BreweriesReducer;