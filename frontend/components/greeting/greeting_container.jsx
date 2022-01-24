import { connect } from 'react-redux';
import Greeting from './Greeting';
import { signup } from '../../actions/session_actions'
import { login } from '../../actions/session_actions'
//do I need to know if theres a current user here? 

const mSTP = () => ({
   
})

const mDTP = dispatch => ({
    
})

export default connect(mSTP, mDTP)(SignupForm)