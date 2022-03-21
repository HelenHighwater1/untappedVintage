import * as APIUtil from '../util/review_api_util';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_VINTAGES = 'RECEIVE_VINTAGES';

export const receiveReviews = ( reviews ) => {
    return {
    type: RECEIVE_REVIEWS,
    reviews
    }
};

export const receiveVintages = ( vintages ) => {
    return {
    type: RECEIVE_VINTAGES,
    vintages
    }
};



export const receiveReview = ({ review }) => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const fetchReviews = () => dispatch => (
    APIUtil.fetchReviews().then(reviews => {
        return dispatch(receiveReviews(reviews))
    })
);

// export const fetchUserReviews = (id) => dispatch => (
//     APIUtil.fetchUserReviews(id).then(reviews => {
//         return dispatch(receiveReviews(reviews))
//     })
// );
export const fetchVintages = () => dispatch => (
    APIUtil.fetchVintages().then(vintages => {  
        return dispatch(receiveVintages(vintages))
    })
);

export const fetchReview = (id) => dispatch => (
    APIUtil.fetchReview(id).then(payload => {
        return (dispatch(receiveReview(payload)))
    })
);

export const createReview = (review) => dispatch => (
    APIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

export const updateReview = (review) => dispatch => (
    APIUtil.updateReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

export const deleteReview = (id) => dispatch => (
    APIUtil.deleteReview(id)
        .then(() => (dispatch(removeReview(id))))
);