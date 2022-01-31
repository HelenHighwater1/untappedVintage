import * as APIUtil from '../util/beer_api_util';

export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const RECEIVE_BEER = 'RECEIVE_BEER';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveBeers = (beers) => ({
    type: RECEIVE_BEERS,
    beers
});

export const receiveBeer = ( beer ) => {
    return {type: RECEIVE_BEER,
    beer}
};

export const receiveReview = ({ review, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    author
});

export const createReview = (review) => dispatch => (
    APIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

export const fetchBeers = () => dispatch => (
    APIUtil.fetchBeers().then(beers => {
        return dispatch(receiveBeers(beers))
    })
);

export const fetchBeer = (id) => dispatch => (
    APIUtil.fetchBeer(id).then(payload => {
        return (dispatch(receiveBeer(payload))) })
);

export const createBeer = (beer) => dispatch => (
    APIUtil.createBeer(beer).then(beer => (
        dispatch(receiveBeer(beer))
    ))
);
