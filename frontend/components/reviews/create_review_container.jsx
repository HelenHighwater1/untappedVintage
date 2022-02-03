import { connect } from 'react-redux';
import { createReview, fetchVintages } from '../../actions/review_actions';
import { fetchBeers } from '../../actions/beer_actions';
import { fetchUser } from '../../actions/user_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
import CreateReviewForm from './create_review';

const mSTP = (state) => ({
    beers: state.entities.beers,
    vintages: state.entities.vintages,
    

})

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    fetchBeers: () => dispatch(fetchBeers()),
    fetchVintages: () => dispatch(fetchVintages()), 
    fetchUser: (id) => dispatch(fetchUser(id)),
    
})

export default connect(mSTP, mDTP)(CreateReviewForm)