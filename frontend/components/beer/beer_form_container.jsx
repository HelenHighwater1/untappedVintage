import { connect } from 'react-redux';
import { createBeer } from '../../actions/beer_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import BeerForm from './beer_form';



const mSTP = (state) => ({
    formType: "Create Beer",
    breweries: state.entities.breweries
})

const mDTP = dispatch => ({
    createBeer: beer => dispatch(createBeer(beer)),
    fetchBreweries: () => dispatch(fetchBreweries())
})

export default connect(mSTP, mDTP)(BeerForm)