import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginDemoUser = this.loginDemoUser.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.login(this.state)
            .then(() => this.props.history.push('/reviews_index'));
    }

    loginDemoUser(e) {
        e.preventDefault();
        const demoUser = { username: "guest", password: "password" };
        this.props.login(demoUser)

            .then(() => {
                this.props.history.push('/reviews_index')
            });
    }

    componentWillUnmount() {
        this.clearErrors()
    }

    clearErrors() {
        this.props.receiveErrors([])
    }

    renderErrors() {
        return (
            <ul className="errors-ul">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className='errors'>
                        {error}
                        {/* <FlashMessage duration={5000}>{error}</FlashMessage> */}
                    </li>
                ))}
            </ul>
        );
    }


    render(){
        return(
            <div className="hero">
                <div className='hero-logo'><img src="/assets/logo.png" alt="untappdVintage" /></div>

                <div className="session-modal">
                    <form className='session-form' onSubmit={this.handleSubmit}>
                        {this.renderErrors()}

                        <label> Username</label>
                            <input 
                                
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        
                        <label>Password</label>
                            <input 
                                type='password'
                                value={this.password}
                                onChange={this.update('password')}
                            />
                        <p></p>

                        <button type='submit'>Log in!</button>
                     
                        <button onClick={this.loginDemoUser}>Log in as Demo User</button>

                        <p className='login-signup-text-link'>New around here?  <Link to="./signup" id="text-link">Sign up!</Link>  </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;