import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';


const mSTP = errors  => ({
    errors: errors.session,
    formType: "Log in",
    // navLink: <Link to="/signup">Sign up instead?</Link>

})

const mDTP = dispatch => ({
    submitAction: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(LoginForm)