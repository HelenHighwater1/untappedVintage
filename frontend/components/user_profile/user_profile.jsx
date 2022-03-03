import React from 'react';
import {Link} from 'react-router-dom';

class BeerShow extends React.Component {
    constructor(props) {
        super(props)
        

    }

    componentDidMount() {
        this.props.fetchReviews(this.props.match.params.beerId)
            
    }

    renderFriendsMenu() {

    }

    renderBadge() {
        // if (this.props.user.reviews.length <)
    }


    render () {

        // if (this.state.reviews)
        return (
            <div>
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
