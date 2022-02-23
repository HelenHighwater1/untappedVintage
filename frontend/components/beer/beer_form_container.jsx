import { connect } from 'react-redux';
import { createBeer, receiveBeerErrors } from '../../actions/beer_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import BeerForm from './beer_form';



const mSTP = ({errors, entities} , ownProps) => ({
    formType: "Create Beer",
    breweries: entities.breweries,
    errors
})

const mDTP = dispatch => ({
    createBeer: beer => dispatch(createBeer(beer)),
    fetchBreweries: () => dispatch(fetchBreweries()),
    receiveBeerErrors: (error) => dispatch(receiveBeerErrors(error))
})

export default connect(mSTP, mDTP)(BeerForm)