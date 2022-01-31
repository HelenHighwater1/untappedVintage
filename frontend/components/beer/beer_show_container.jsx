import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { fetchBeer } from '../../actions/beer_actions';
import { selectBeer } from '../../reducers/selectors';


const mSTP = (state, ownProps ) => {
    return {beer: state.beers[ownProps.match.params.beerId]}
    
};

const mDTP = dispatch => ({
    fetchBeer: (beerId) => dispatch(fetchBeer(beerId))
});

export default connect(mSTP, mDTP)(BeerShow);
