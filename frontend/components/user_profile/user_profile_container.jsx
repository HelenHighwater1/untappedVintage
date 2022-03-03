import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';


const mSTP = (state, ownProps ) => {
    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
    
};

const mDTP = dispatch => ({
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
});

export default connect(mSTP, mDTP)(UserProfile);
