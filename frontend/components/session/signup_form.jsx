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
        this.props.action(this.state)
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
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
                {/* how to handle additional fields for sign up */}
                <button type='submit' value={this.props.formType} />
            </form>
        )
    }
}

export default SignupForm;