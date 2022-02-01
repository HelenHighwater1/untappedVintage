import React, { useEffect } from 'react'
import ComboBox from 'react-responsive-combo-box'
// import { fetchBreweries } from '../../actions/brewery_actions'



class BreweryComboBox extends React.Component {
    constructor(props) {
        super(props)
    }
    // componentDidMount() {
    //     this.props.fetchBreweries();

    // }
   
   
    render(){
        const breweries = this.props.breweries
        const options = breweries.map(brewery => brewery.name)

        return ( 
        <ComboBox options={options} onChange = {this.props.onChange} onSelect = {this.props.onSelect} enableAutocomplete />
    )}
}

export default BreweryComboBox