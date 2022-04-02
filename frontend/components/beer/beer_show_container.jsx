import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { fetchBeer } from '../../actions/beer_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectBeer } from '../../reducers/selectors';


const mSTP = (state, ownProps ) => {
    console.log('state', state)
    return {
        beer: state.entities.beers[ownProps.match.params.beerId],
        currentUser: state.entities.users[state.session.id]
    }
    
};

const mDTP = dispatch => ({
    fetchBeer: (beerId) => dispatch(fetchBeer(beerId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mSTP, mDTP)(BeerShow);
