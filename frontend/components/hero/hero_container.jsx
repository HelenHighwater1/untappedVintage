import { connect } from 'react-redux';
import Hero from './hero';
import { signup } from '../../actions/session_actions'
import { login } from '../../actions/session_actions'
//do I need to know if theres a current user here? 

const mSTP = ({ session, users }) => {
    return { currentUser: users[session.id] }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Hero)