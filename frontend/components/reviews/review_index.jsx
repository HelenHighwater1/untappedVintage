import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchBeers();
        this.props.fetchReviews();
        
    }

    findBeerName(id){
        let arr = this.props.beers
        console.log(this.props.beers)
        let obj = arr.find(beer => {
            return beer.id === id
        })
        return obj.name
    }

    render(){
        const reviews = this.props.reviews
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
                <h1 className="header">Review Index</h1>
                <div className= 'split-page'>
                    <div className = 'split-main'>
                        <ul className='review-index'>
                            {
                                reviews.map(review => {
                                    return (<li className="review-index-item" key={review.id}>
                                        <img src={review.photoUrl} className='review-thumbnail' />
                                        <h3>{this.findBeerName(review.beer_id)}</h3>
                                        <ul>
                                            <li>Comments: {review.body}</li>
                                            <li>Rating: {review.rating}</li>
                                        </ul>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="split-right-side">
                            <h1>SPLIT RIGHT</h1>

                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewIndex