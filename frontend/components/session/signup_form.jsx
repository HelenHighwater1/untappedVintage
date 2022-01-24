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
        console.log("sa=", this.props.submitAction)
        this.props.submitAction(this.state)
    }


    render(){
        return(
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
                <label>First name
                    <input
                        type='text'
                        value={this.firstname}
                        onChange={this.update('firstname')}
                    />
                </label>
                <button type='submit'>Sign up!</button>            
            </form>
        )
    }
}

export default SignupForm;