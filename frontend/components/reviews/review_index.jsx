import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)

        this.deleteUsersReview = this.deleteUsersReview.bind(this)
    }
    componentDidMount() {
        
        this.props.fetchBeers();
        this.props.fetchReviews();
        
    }

    deleteUsersReview(id){
        this.props.deleteReview(id)
            .then(() =>{ 
                this.props.fetchReviews()
            });
    }

    findBeerName(id){
        let arr = this.props.beers
  
        let obj = arr.find(beer => {
            return beer.id === id
        })
        return obj?.name
    }

    getAverageRating(id){
        
    }

    render(){
        const reviews = this.props.reviews.slice()
        reviews.sort((a, b)=> { (a.created_at > b.created_at) ? 1 : -1 })
        
        const beers = this.props.beers
        

        if (!reviews || !beers || beers.length === 0 || reviews.length === 0) {

            return (
                <>
                    <div className="buffer"></div>
                    <p>Loading</p>
                </>
            )
        }
        return (
            <div > 
                <div className='buffer'></div>
                <h1 className="header">Newest Reviews</h1>
                <div className= 'split-page'>
                    <div className = 'split-main'>
                        <ul className='review-index'>
                            {
                                reviews.map(review => {
                                    return (<li className="review-index-item" key={review.id}>
                                        <img src={review.photoUrl ? review.photoUrl : "https://cdn11.bigcommerce.com/s-10c6f/images/stencil/500x659/products/58292/84981/FS46028__29930.1606332805.jpg?c=2"} className='review-thumbnail' />
                                        
                                        <div><Link to={`/beers/${review.beer_id}`}><h3>{this.findBeerName(review.beer_id)}</h3></Link>
                                            <ul>
                                                <li><span className="bold">Reviewed:</span>{new Date(review.created_at).toDateString()}</li>
                                                <li><span className="bold">Rating:</span> {review.rating}</li>
                                                <li><span className="bold">Comments:</span> {review.body}</li>
                                                { this.props.currentUser.id === review.user_id ? <span className = "delete-button" onClick={() => this.deleteUsersReview(review.id)}> delete </span>  : ''    }
 
                                            </ul>   
                                        </div>
                                    </li>);
                                })
                            }
                        </ul>
                    </div>
                    <div className='split-right'>
                        <ul className='split-right-ul'>
                            <h2> "The Older the Better"  </h2>
                            <p >Top 5 Beers that age best long-term</p>
                            <li><span className='bold'>Thomas Hardy's Ale</span> - 12-25 years <br />
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8dRYxcEOhJv7ZF2U4GB9QENcGStHbAhJlKw&usqp=CAU' />
                            </li>
                            <li> <span className='bold'>Orval </span>- 8 years
                                <img src='https://cdn.hopculture.com/wp-content/uploads/2019/03/Orval-How-to-serve-Orval.jpg' />
                            </li>
                            <li><span className='bold'>Parabola</span> -7 years
                                <img src="https://cdn.shopify.com/s/files/1/0067/6030/0609/products/firestone-parabola-2015_1600x.jpg?v=1610490421" />
                            </li>
                            <li><span className='bold'>Westvleteren 12</span> - 5 years
                                <img src="https://www.beeroftheday.com/photos/trappist-westvleteren-12-xii-979_0.jpg" />
                            </li>
                            <li><span className='bold'>Rochefort 10</span> - 4 years
                                <img src="https://www.thefoodlens.com/uploads/2019/03/THE-PUBLICK-HOUSE_THE-FOOD-LENS_BRIAN-SAMUELS-PHOTOGRAPHY_APRIL-2019-0678-copy-1200x800.jpg" />
                            </li>

                        </ul>


                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewIndex