import React from 'react';

class LoginForm extends React.Component {
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
        const user = Object.assign({}, this.state);
        this.props.submitAction(this.state)
            .then(() => this.props.history.push('/review_index'));
    }

    renderErrors() {
        return (
            <ul className="errors-ul">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
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
            <div className="session-modal">
            <form className='session-form' onSubmit={this.handleSubmit}>
                {this.renderErrors()}

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

                <button type='submit'>Log in!</button>
            </form>
            </div>
        )
    }
}

export default LoginForm;