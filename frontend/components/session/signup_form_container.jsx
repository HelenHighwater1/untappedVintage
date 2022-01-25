import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions'

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: "Sign Up",
    // navLink: <Link to="/login">Log in instead?</Link>,
})

const mDTP = dispatch => ({
    submitAction: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SignupForm)