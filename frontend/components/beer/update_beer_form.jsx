import React from 'react';
import {withRouter} from 'react-router-dom'


class EditBeer extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.beer
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const updatedBeer = Object.assign({}, this.state)
        this.props.updateBeer(updatedBeer)
            .then(() => this.props.history.push('/beers'));

    }

    handleDelete(e) {
        e.preventDefault()
        this.props.deleteBeer(this.props.beer.id)
            .then(() => this.props.history.push('/beers'));
    }

    render() {
       
        return (
            <div>
                <div className="buffer"></div>

                <form className='beer-form' onSubmit={this.handleSubmit}>
                    <h1 padding="10px">Edit {this.props.beer.name}</h1>
                    <label>Name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                    />

                    <label>Serving Style:</label>
                    <textarea
                        value={this.state.serving_style}
                        onChange={this.update('serving_style')}
                    />
                    <button type='submit'>Update Beer!</button>
                    <p> -or- </p>
                    <button onClick={this.handleDelete}>Delete Beer</button>

                </form>
                </div>
            
        )
    }

}

export default withRouter(EditBeer); 