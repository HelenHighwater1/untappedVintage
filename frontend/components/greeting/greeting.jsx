import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = () => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="./login">Login</Link>
            <Link to="./signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <div>
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
