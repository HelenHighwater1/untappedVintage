import React from 'react';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview } from '../../actions/review_actions'
import { fetchBeers } from '../../actions/beer_actions'
import { connect } from 'react-redux';

import ReviewsIndex from './review_index';

const mSTP = state => ({
    reviews: Object.values(state.entities.reviews),
    beers: Object.values(state.entities.beers), 
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: (id) => dispatch(deleteReview(id)),
    fetchBeers: () => dispatch(fetchBeers())
});

export default connect(mSTP, mDTP)(ReviewsIndex);