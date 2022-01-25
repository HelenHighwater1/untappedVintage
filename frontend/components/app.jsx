import React from 'react';
import {
    Route,
    Routes,
    Redirect,
    Switch,
    Link,
    HashRouter as Router
} from 'react-router-dom';

// import { Provider } from 'react-redux';

import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import HeroContainer from './hero/hero_container'
import ReviewIndex from './reviews/review_index'
import Navbar from './navbar/navbar_container'
const App = () => (
    <div> 
        <header>
            <Navbar />
        </header>
        <Route exact path="/review_index" component={ReviewIndex} />
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/login" component={LogInFormContainer} />
        <Route path="/" component={HeroContainer} /> 

    </div>
);

export default App;
    