import { connect } from 'react-redux';
import { receiveErrors, login } from '../../actions/session_actions';
import LoginForm from './login_form';



const mSTP = ({errors})  => ({
    errors: errors.session,
    formType: "Log in",
    // navLink: <Link to="/signup">Sign up instead?</Link>

})

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
})

export default connect(mSTP, mDTP)(LoginForm)