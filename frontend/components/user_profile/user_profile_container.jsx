import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';


const mSTP = (state ) => {
    return {
        user: state.entities.users[state.session.id]
        
    }
    
};

const mDTP = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(UserProfile);
