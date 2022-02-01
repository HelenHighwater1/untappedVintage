import { connect } from 'react-redux';
import BeerIndex from './beer_index';
import { fetchBeers } from '../../actions/beer_actions';


const mSTP = state => ({
    beers: Object.values(state.entities.beers)
});

const mDTP = dispatch => ({
    fetchBeers: () => dispatch(fetchBeers()),
});

export default connect(mSTP, mDTP)(BeerIndex);