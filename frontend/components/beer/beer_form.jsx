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
        this.props.createBeer(this.state)
            .then(() => this.props.history.push('/beers'));

    }


    render() {
        return (
           <div>
               <div className="buffer"></div>
                
                <form className='beer-form' onSubmit={this.handleSubmit}> 
                    <h1 padding="10px">Create A New Beer</h1>
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
                    <button type='submit'>Create Beer!</button>

                </form>
             
           </div>
                
           
        )
    }
}

export default CreateBeer