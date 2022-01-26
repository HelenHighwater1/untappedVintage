import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props) 
        this.logoutUser = this.logoutUser.bind(this)
    }

    logoutUser = () => {
        this.props.logout()
        this.props.history.push('/');
    }

    render() {
        console.log(!!this.props.currentUser)
        const navStatus = this.props.currentUser ? ("nav-not-hidden") : ("nav-hidden")
        return (
            <div className={navStatus}>
                <div>

                </div>
                <div className='dropdown-menu'>
                    <img className="profile-thumbnail" src="assets/profile_default"></img>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/reviews_index">My Profile</Link>
                        <Link className="dropdown-item" to="/reviews_index">My Reviews</Link>
                        <span className="dropdown-item" onClick={this.logoutUser}>Log Out</span>
                    </div>
                </div>
             </div>
        )
    }

}



export default withRouter(Navbar);
