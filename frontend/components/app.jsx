import React from 'react';
import {
    Route,
    Routes,
    Redirect,
    Switch,
    Link,
    HashRouter as Router
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


// import UserProfileContainer from './user_profile/user_profile_container';
import CreateReviewFormContainer from './reviews/create_review_container'
import CreateBeer from './beer/beer_form_container';
import EditBeer from './beer/update_beer_form_container';
import ShowBeer from './beer/beer_show_container';
import BeerIndexContainer from './beer/beer_index_container';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import HeroContainer from './hero/hero_container';
import ReviewIndexContainer from './reviews/review_index_container';
import Navbar from './navbar/navbar_container';
import Footer from './footer';
import Oops from './oops';

// const mSTP = ({ session, users }) => {
//     return { currentUser: users[session.id] }
// }



const App = (props) => (
    <div className='display-flex'> 
        <header>
            <Navbar />
        </header>
        <Switch>
            {/* <ProtectedRoute exact path = "/profile" component={UserProfileContainer}/> */}
            <ProtectedRoute exact path = "/create_review" component={CreateReviewFormContainer}/>
            <ProtectedRoute exact path="/create_beer" component={CreateBeer} />
            <ProtectedRoute exact path="/edit_beer/:beerId" component={EditBeer} />
            <Route exact path="/reviews_index" component={ReviewIndexContainer} />
            <Route exact path="/beers/:beerId" component={ShowBeer}/>
            <Route exact path="/beers" component={BeerIndexContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <Route exact path="/" component={HeroContainer} />
            <Route component={Oops} />
        </Switch>
        {/* <footer> */}
        <Footer />
        {/* </footer> */}
    </div>
);

export default App;
    