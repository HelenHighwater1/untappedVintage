import { connect } from 'react-redux';
import { signup } from '../../util/session_api_util';
import SignupForm from './signup_form';

const mSTP = errors => ({
    errors: errors.session,
    formType: "Sign Up"
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SignupForm)