import * as APIUtil from '../util/brewery_api_util';

export const RECEIVE_BREWERIES = 'RECEIVE_BREWERIES';


export const receiveBreweries = (breweries) => {
    
    return {
    type: RECEIVE_BREWERIES,
    breweries
}};


export const fetchBreweries = () => dispatch => (
    APIUtil.fetchBreweries().then(breweries => {
        return dispatch(receiveBreweries(breweries))
    })
);
