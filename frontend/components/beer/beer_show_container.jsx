import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { fetchBeer } from '../../actions/beer_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchUsers } from '../../actions/user_actions';
import { selectBeer } from '../../reducers/selectors';
import { fetchBeerReviews } from '../../actions/review_actions'

const mSTP = (state, ownProps ) => {
    // console.log('in container', Object.values(state.entities.reviews) )
    return {
        beer: state.entities.beers[ownProps.match.params.beerId],
        currentUser: state.entities.users[state.session.id], 
        users: state.entities.users,
        beerReviews: Object.values(state.entities.reviews)
            // .filter((review) => review.beerId === ownProps.match.params.beerId)
    }
    
};

const mDTP = dispatch => ({
    fetchBeer: (beerId) => dispatch(fetchBeer(beerId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchBeerReviews: (beerId) => dispatch(fetchBeerReviews(beerId))
});

export default connect(mSTP, mDTP)(BeerShow);
