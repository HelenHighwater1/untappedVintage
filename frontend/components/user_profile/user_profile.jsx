import React from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        

    }

    componentDidMount() {
        console.log(this.props)
        this.props.fetchUser(this.props.user.id)
        
    }

    renderFriendsMenu() {

    }

    renderBadge() {
        // if (this.props.user.reviews.length <)
    }


    render () {

        // if (this.state.reviews)
        if (!this.props.user ) return <div>"loading"</div>
        return (
            <div>
                <div className='buffer' />
                <div className = "user-profile-content">
                    <div className="profile-user-info">
                        <div className ="profile-name">
                            Hi, {this.props.user.username}!
                        </div>
                        <div className ="profile-icons">
                             <img className='beer-thumbnail' src={this.props.user.photoUrl} alt={this.props.user.username} />
                             <div>badge placeholder</div> 
                        </div>
                        <div className ="profile-about-user">

                        </div>
                    </div>
                    <div className="profile-reviews-info">
                        <div className= 'profile-reviews-header'>
                            
                        </div>
                        <div className= 'profile-reviews-list'>

                        </div>
                    </div>
                    <div className="profile-friends-info">
                        <div className= 'profile-friends-header'>
                            
                        </div>
                        <div className= 'profile-friends-list'>
                            
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}


export default UserProfile