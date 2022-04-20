import React, { useEffect } from 'react'
import ComboBox from 'react-responsive-combo-box'
// import { fetchBreweries } from '../../actions/brewery_actions'


// export const vintage_combo_box = vintages => {
//     const yrs = vintages.map(vin => vin.year)
//     return (
//         <ComboBox options={yrs} onChange={this.props.onChange} onSelect={this.props.onSelect} enableAutocomplete />
//     )
// }

// export const BeerComboBox = beers => {
//    
//     const options = beers.map(beer => beer.name)
//     return (
//         <ComboBox options={options} onChange={this.props.onChange} onSelect={this.props.onSelect} enableAutocomplete />
//     )
// }

class BeerComboBox extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const beers = this.props.beers
        const options = beers.map(beer => beer.name)

        return (
            <ComboBox options={options} onChange={this.props.onChange} onSelect={this.props.onSelect} enableAutocomplete />
        )
    }
}

export default BeerComboBox

