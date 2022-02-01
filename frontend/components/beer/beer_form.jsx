import React from 'react';
import BreweryComboBox from './combo_box';
// import { Link } from 'react-router-dom';
import { fetchBreweries } from '../../actions/brewery_actions'

class CreateBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            brewery_id: '',
            serving_style: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.findBreweryId = this.findBreweryId.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    updateSelect(field) {
        return input => this.setState({ [field]: input })
    }

    handleSubmit(e) {
        e.preventDefault()
        let breweryId = this.findBreweryId(this.state.brewery_id)
        this.setState({brewery_id: breweryId})
        console.log('this.brewery=', this.state.brewery_id)
        this.props.createBeer({
            name: this.state.name,
            brewery_id: breweryId,
            serving_style: this.state.serving_style
        })
            .then(() => this.props.history.push('/beers'));

    }

    findBreweryId(brewery) {
        let arr = this.props.breweries
        let obj = arr.find(breweryObject => {
           return breweryObject.name === `${brewery}`
        })
        return obj.id
    }

    componentDidMount() {
        this.props.fetchBreweries();
    }
    
    render() {
        const breweries = this.props.breweries
        let breweryComboBox = null
        if (breweries.length > 0) {
            breweryComboBox = <BreweryComboBox breweries={breweries} onChange={this.update('brewery_id')} onSelect={this.updateSelect('brewery_id')} />
        }
    
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
                    {breweryComboBox }
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