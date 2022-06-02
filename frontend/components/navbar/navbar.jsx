import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props) 
        this.logoutUser = this.logoutUser.bind(this)
        this.state = { display: { display: 'none' }}
    }

    logoutUser = () => {
        this.props.logout()
        this.props.history.push('/');
    }

    render() {
        const navStatus = this.props.currentUser ? ("nav-not-hidden") : ("nav-hidden")

        return (
            <div className={navStatus}>
                
                <div className="nav-logo"><img src="/assets/logo.png" alt="untappdVintage" /></div>
                <div className="main-nav">
                    <Link to="/beers">Pub</Link>
                    <Link to="/reviews_index">Newest Reviews</Link>
                    {/* <Link to="/top_rated">Top Rated!</Link> */}

                </div>
                <div className='dropdown-menu' 
                    onMouseEnter={e => {
                        this.setState({ display: {display: 'block'} });
                    }}
                    onMouseLeave={e => {
                        this.setState({ display: { display: 'none' } })
                    }}>
                    <img className="profile-thumbnail" src="assets/profile_default"></img>
                    <div className="dropdown-display" style = { this.state.display }>
                        <Link className="dropdown-item" to="/profile">Profile</Link>
                        <Link className="dropdown-item" to="/beers">The Pub</Link>
                        <Link className="dropdown-item" to="/reviews_index">Reviews</Link>
                        <span className="dropdown-item" onClick={this.logoutUser}>Log Out</span>
                    </div>
                </div>
             </div>
        )
    }

}



export default withRouter(Navbar);
