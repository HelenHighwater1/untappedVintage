import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '', 
            email: '',
            first_name: '',
            last_name: '',
            country: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    componentWillUnmount() {
            this.clearErrors()
    }

    clearErrors() {
        this.props.receiveErrors([])
    }


    handleSubmit(e) {
        e.preventDefault()
        this.props.submitAction(this.state)
            .then(() => this.props.history.push('/beers'));
            
    }
    
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className='errors' key={`error-${i}`}>
                        {`-${error}`}
                    </li>
                ))}
            </ul>
        );
    }


    render(){
        return(
            <div className = 'hero'>
                    <nav className="login-signup">

                        
                    </nav>
                <div className='hero-logo'><img src="/assets/logo.png" alt="untappdVintage" /></div>

                <div className='session-modal'>
                    <form className='session-form' onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <label> Username  </label>
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        
                        <label>Password  </label>
                            <input 
                                type='password'
                                value={this.password}
                                onChange={this.update('password')}
                            />
                        
                        <label>Email </label>    
                            <input
                                type='text'
                                value={this.email}
                                onChange={this.update('email')}
                            />
                        
                        <label>First name</label>
                            <input
                                type='text'
                                value={this.first_name}
                                onChange={this.update('first_name')}
                            />
                        
                        <label>Last name </label>
                            <input
                                type='text'
                                value={this.last_name}
                                onChange={this.update('last_name')}
                            />
                        
                        <label>Country </label>
                            <input
                                type='text'
                                value={this.country}
                                onChange={this.update('country')}
                            />
                        
                        <button type='submit'>Sign up!</button>         

                        <p className='login-signup-text-link'>Already have an account?  <Link to="./login" id="text-link">Login</Link></p>
   
                    </form>
                </div>
            </div>

        )
    }
}

export default SignupForm;