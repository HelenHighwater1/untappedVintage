import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserReviews } from '../../actions/review_actions';


const mSTP = (state ) => {
    console.log('inMSTP, StateL', state)
    const values =  Object.values(state.entities.reviews)
    const userReviews = values?.filter((review)=> {

        return review.user_id === state.session.id})
    return {
        user: state.entities.users[state.session.id],
        reviews: userReviews
       
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
