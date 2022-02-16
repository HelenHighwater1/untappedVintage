import * as APIUtil from '../util/beer_api_util';

export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const RECEIVE_BEER = 'RECEIVE_BEER';
export const REMOVE_BEER = 'REMOVE_BEER';
export const RECEIVE_BEER_ERRORS = "RECEIVE_BEER_ERRORS"

export const receiveBeers = beers => ({
    type: RECEIVE_BEERS,
    beers
});

export const receiveBeer = beer => {
    return {type: RECEIVE_BEER,
    beer}
};

export const removeBeer = beerId => ({
    type: REMOVE_BEER,
    beerId
});

export const receiveBeerErrors = errors => ({
  type: RECEIVE_BEER_ERRORS,
  errors
})

export const fetchBeers = () => dispatch => (
    APIUtil.fetchBeers().then(beers => {
        return dispatch(receiveBeers(beers))
    })
);

export const fetchBeer = (id) => dispatch => (
    APIUtil.fetchBeer(id).then(payload => {
        return (dispatch(receiveBeer(payload))) })
);

export const createBeer = beer => dispatch => (
    APIUtil.createBeer(beer)
        .then(beer => dispatch(receiveBeer(beer)),
        errors => dispatch(receiveBeerErrors(errors.responseJSON)))
);
export const updateBeer = beer => dispatch => (
    APIUtil.updateBeer(beer)
        .then(beer => dispatch(receiveBeer(beer)), 
        errors => dispatch(receiveBeerErrors(errors.responseJSON)))
);

export const deleteBeer = (id) => dispatch => (
    APIUtil.deleteBeer(id)
        .then(() => dispatch(removeBeer(id)))
);