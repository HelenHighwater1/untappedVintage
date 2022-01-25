import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props){
        super(props) // do i need to add signout here?  

    }

    render() {
        return (
            <div className="header-list">
                <ul>
                    <li>My Profile</li>
                    <li>My Reviews</li>
                    <li onClick={props.logout()}>Log Out</li>
                </ul>
            </div>
        )
    }

}



export default Navbar;
