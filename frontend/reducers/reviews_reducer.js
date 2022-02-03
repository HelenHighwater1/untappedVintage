import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_VINTAGES } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_VINTAGES:
            return action.vintages;
        case RECEIVE_REVIEW:
            const newReview = { [action.review.id]: action.review };
            return Object.assign({}, state, newReview);
        // case REMOVE_REVIEW:
            
            // return newState;
        default:
            return state;
    }
};

export default ReviewsReducer;
