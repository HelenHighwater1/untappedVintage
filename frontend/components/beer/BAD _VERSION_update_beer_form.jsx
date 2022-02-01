import React from 'react';
import 'babel-polyfill';

class EditBeer extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = this.props.beer
    }


    handleSubmit(e) {
        e.preventDefault()

        this.props.updateBeer(this.state)
            .then(() => this.props.history.push('/beers'));

    }

    // componentDidUpdate(previousProps) {
    //     if (previousProps.beer == null && this.props.beer != null) {
    //         this.setState({
    //             id: this.props.beer.id,
    //             name: this.props.beer.name,
    //             brewery_id: this.props.beer.brewery_id,
    //             serving_style: this.props.beer.serving_style
    //         })
    //         console.log("inside componentDidUpdate", this.props.beer)
    //     }
        
    // }

    // async function getBeer() { await this.props.fetchBeer(this.props.match.params.beerId) }

    componentDidMount() {
        this.props.fetchBeer(this.props.match.params.beerId)
            .then(() => {this.state = this.props.beer})
    }   
    


    render() {
        
        let beer = this.props.beer
        if (!beer) {
            return (
                <><div className='buffer'></div>
                    <p>Loading</p>
                </>

            )
        } 

        // debugger
        return (
            <div>
                <div className="buffer"></div>

                <form className='beer-form' onSubmit={this.handleSubmit}>
                    <h1 padding="10px">Edit {this.props.beer.name}</h1>
                    <label>Name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}
                    />
       
                    <label>Serving Style:</label>
                    <textarea
                        value={this.state.serving_style}
                        onChange={(e) => this.setState({serving_style: e.target.value })}
                    />
                    <button type='submit'>Update Beer!</button>
                    <p> -or- </p>
                    <button onClick={() => this.props.deleteBeer(this.props.beer.id)}>Delete Beer</button>
                </form>

            </div>


        )
    }
}

export default EditBeer