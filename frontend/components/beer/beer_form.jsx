import React from 'react';
// import { Link } from 'react-router-dom';

class CreateBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            brewery: '',
            serving_style: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.submitAction(this.state)
            .then(() => this.props.history.push('/create_beer'));

    }

    // renderErrors() {
    //     return (
    //         <ul className="errors-ul">
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`} className='errors'>
    //                     {error}
    //                     {/* <FlashMessage duration={5000}>{error}</FlashMessage> */}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    // clearErrors() {
    //     this.props.receiveErrors([])
    // }

    render() {
        return (
           <div>
               <div className="buffer"></div>
                <div>Create A New Beer</div>
                <form> 
                    {/* {this.renderErrors()} */}
                    <label>Beer Name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                    />
                    <label>Brewery</label>
                    <input
                        type="text"
                        value={this.state.brewery}
                        onChange={this.update('brewery')}
                    />
                    <label>Serving Style:</label>
                    <textarea
                        value={this.state.serving_style}
                        onChange={this.update('serving_style')}
                    />


                </form>
           </div>
                
           
        )
    }
}

export default CreateBeer