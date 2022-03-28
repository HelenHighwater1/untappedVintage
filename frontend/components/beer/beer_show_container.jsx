import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { fetchBeer } from '../../actions/beer_actions';
import { selectBeer } from '../../reducers/selectors';


const mSTP = (state, ownProps ) => {
    console.log('state', state)
    return {
        beer: state.entities.beers[ownProps.match.params.beerId],
        user: state.entities.users 
    }
    
};

const mDTP = dispatch => ({
    fetchBeer: (beerId) => dispatch(fetchBeer(beerId))
});

export default connect(mSTP, mDTP)(BeerShow);
