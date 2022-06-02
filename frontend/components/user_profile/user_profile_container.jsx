import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserReviews } from '../../actions/review_actions';


const mSTP = (state ) => {

    return {
        user: state.entities.users[state.session.id],
        reviews: state.entities.reviews[state.session.id]
    }
    
};

const mDTP = dispatch => {
    console.log('in mdtp', fetchUserReviews)
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)), 
        fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)) 
    }

};

export default connect(mSTP, mDTP)(UserProfile);
