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
                console.log('Boo')
                this.props.history.push('/reviews_index')
            });
    }

    renderErrors() {
        return (
            <ul className="errors-ul">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                        {/* <FlashMessage duration={5000}>{error}</FlashMessage> */}
                    </li>
                ))}
            </ul>
        );
    }
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps)
    //     this.props.recieveErrors()
        // if (this.props.errors.length > 0)
    // }

    render(){
        return(
            <div className="hero">
                <nav className="login-signup">

                    <Link to="./login" id="text-link">Login</Link>
                    <Link to="./signup" id="text-link">Sign up!</Link>
                </nav>
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
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;