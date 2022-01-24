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

const App = () => (
    <div> 
        <h1>Welcome to the UntappedVintage App!</h1>
        
        <Switch>
        
            <Route exact path="/login" component={LogInFormContainer} />
            <Route path="/" component={SignUpFormContainer} /> 

        </Switch>

    </div>
);

export default App;
