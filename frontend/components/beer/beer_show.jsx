import React from 'react';
import {Link} from 'react-router-dom';

class BeerShow extends React.Component {
    constructor(props) {
        super(props)
        
        this.renderReviews = this.renderReviews.bind(this)
        this.fetchAverageRating = this.fetchAverageRating.bind(this)
    }

    componentDidMount() {
        this.props.fetchBeer(this.props.match.params.beerId);
        this.props.fetchBeerReviews(this.props.match.params.beerId)
        this.props.fetchUsers()
    }

    fetchUsername(user) {

    }

    fetchVintage(vintageId){
        return vintage.year
    }

    renderReviews() {

        const reviews = this.props.beerReviews
        console.log('users.values', this.props.users)
      
        if (reviews.length === 0) {
            return <div>No reviews yet!</div>
        }

        return (
            <div>
                <table >
                    <tbody>
                    <tr className = 'beer-reviews-table-headers'>   
                        <th className = 'beer-reviews-table-small-col'>
                            User
                        </th>
                        <th className = 'beer-reviews-table-small-col'>
                            Vintage
                        </th>
                        <th className = 'beer-reviews-table-wide-col'>
                            Review
                        </th>
                        <th className = 'beer-reviews-table-small-col'> 
                            Rating
                        </th>
                    </tr>
               
                    
                {reviews.map(review => 
                    
                    <tr>
                        <td className = 'beer-reviews-table-small-col'>
                            {/* User {this.props.users.values.findBy(user => (user.id === review.user_id))} says:  */}
                        </td>
                        <td className = 'beer-reviews-table-small-col'>
                            {review.vintage}  
                        </td>
                        <td className ='beer-reviews-table-wide-col'>
                            {review.body}
                        </td>
                        <td className = 'beer-reviews-table-small-col'>
                            {review.rating} Stars!
                        </td>
                    </tr> 
                )}
                </tbody>
                </table>
        
            </div>
        )

    }

    fetchAverageRating(){
        let sum = 0
        let length = 0
        this.props.beerReviews.forEach(review => {
            sum += review.rating
            length += 1
        })
        return sum/length
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
                    <h1 className='beer-reviews-header'>{beer.name}</h1>
                    <p>{beer.brewery.name}</p>
                    <p>{beer.serving_style}</p>

                    <p>Average Rating: {this.fetchAverageRating()} </p>
                    
                    <p><Link to={`/edit_beer/${beer.id}`}>{updateBeer}</Link></p>  
                    
                </div>
                
           
            </div> 
            <div className="create-review-button">Drinking this beer now?<Link to="/create_review" id="text-link" > Check-in and add a Review!</Link></div>
             
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