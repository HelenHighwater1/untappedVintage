import { connect } from 'react-redux';
import { receiveErrors, createBeer } from '../../actions/beer_actions';
import BeerForm from './beer_form';



const mSTP = ({  }) => ({
    formType: "Create Beer"
})

const mDTP = dispatch => ({
    createBeer: beer => dispatch(createBeer(beer)),
})

export default connect(mSTP, mDTP)(BeerForm)