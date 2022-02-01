import { connect } from 'react-redux';
import { updateBeer, fetchBeer, deleteBeer } from '../../actions/beer_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import EditBeer from './update_beer_form';



const mSTP = (state, ownProps) => {
    console.log('in mSTP', state.entities.beers)
    return {beer: state.entities.beers[ownProps.match.params.beerId]}
    // breweries: state.entities.breweries
}

const mDTP = dispatch => ({
    updateBeer: beer => dispatch(updateBeer(beer)),
    fetchBeer: (id) => dispatch(fetchBeer(id)),
    deleteBeer: (id) => dispatch(deleteBeer(id))
})

export default connect(mSTP, mDTP)(EditBeer)