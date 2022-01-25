import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.submitAction(this.state)
    }


    render(){
        return(
            <div className='session-modal'>
            <form className='session-form' onSubmit={this.handleSubmit}>
                <label> Username
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
                <label>Password
                    <input 
                        type='password'
                        value={this.password}
                        onChange={this.update('password')}
                    />
                </label>
                <label>Email
                    <input
                        type='text'
                        value={this.email}
                        onChange={this.update('email')}
                    />
                </label>
                <label>First name
                    <input
                        type='text'
                        value={this.first_name}
                        onChange={this.update('first_name')}
                    />
                </label>
                <label>Last name
                    <input
                        type='text'
                        value={this.last_name}
                        onChange={this.update('last_name')}
                    />
                </label>
                <label>Country
                    <input
                        type='text'
                        value={this.country}
                        onChange={this.update('country')}
                    />
                </label>
                <button type='submit'>Sign up!</button>            
            </form>
            </div>
        )
    }
}

export default SignupForm;