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


import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import HeroContainer from './hero/hero_container';
import ReviewIndex from './reviews/review_index';
import Navbar from './navbar/navbar_container';
import Footer from './footer';


const App = () => (
    <div> 
        <header>
            <Navbar />
        </header>
        <Route exact path="/review_index" component={ReviewIndex} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute path="/" component={HeroContainer} /> 
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;
    