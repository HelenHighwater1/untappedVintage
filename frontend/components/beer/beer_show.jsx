import React from 'react';
import {Link} from 'react-router-dom';

class BeerShow extends React.Component {
    constructor(props) {
        super(props)
        
        this.renderReviews = this.renderReviews.bind(this)
    }

    componentDidMount() {
      
        this.props.fetchBeer(this.props.match.params.beerId);
        this.props.fetchBeerReviews(this.props.match.params.beerId)
            


    }

    renderReviews() {

        const reviews = this.props.beerReviews
        console.log(reviews)
      
        if (reviews.length === 0) {
            return <div>No reviews yet!</div>
        }

        return (
            <div>
                {reviews.map(review => 
                    <div>
                        <li className='beer-review-li'>
                            <p className='beer-review-li-user'>User {review.user_id} says:</p>
                            <p className='beer-review-li-body'>{review.body}</p>
                             {review.rating} Stars!</li>
                    </div>
                )}
        
            </div>
        )

    }



    render() {
        const beer  = this.props.beer
    
        if (!beer) {
            return (
                <><div className='buffer'></div>
                    <p>Loading</p>
                </>
                
            )
        }
        
        const updateBeer = this.props.currentUser.id === beer.user_id ? 'Update' : ''
        console.log('beerReviews =', this.props.beerReviews)
        return (    
            <>
            <div className='buffer'></div>
            <div className = "beer-show">
                <img className='beer-thumbnail' src={beer.photoUrl} alt={beer.name} />
                <div className = "beer-show-info">
                    <h3>{beer.name}</h3>
                    <p>{beer.brewery.name}</p>
                    <p>{beer.serving_style}</p>

                    <p>Average Rating: </p>
                    
                    <p><Link to={`/edit_beer/${beer.id}`}>{updateBeer}</Link></p>  
                    
                </div>
                
           
            </div> 
            <div className="create-review-button">Drinking this beer now?<Link to="/create_review" id="text-link"> Check-in and add a Review!</Link></div>
             
            <div className="beer-review">
                <h1 className="beer-reviews-header">Reviews</h1>
                <br />
                <div className = "beer-review-list">
                      {this.renderReviews()}
                </div>
              
            </div>
            </>
        )
    }

}

export default BeerShow