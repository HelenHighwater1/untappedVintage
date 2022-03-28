import React from 'react';
import {Link} from 'react-router-dom';

class BeerShow extends React.Component {
    constructor(props) {
        super(props)
        
        
    }

    componentDidMount() {
        console.log(this.props)
        this.props.fetchBeer(this.props.match.params.beerId);
        // this.props.fetchReviews()
        console.log(this.props.user)
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
       
    
        return (
            <>
            <div className='buffer'></div>
            <div className = "beer-show">
                <img className='beer-thumbnail' src={beer.photoUrl} alt={beer.name} />
                <div className = "beer-show-info">
                    <h3>{beer.name}</h3>
                    <p>{beer.brewery.name}</p>
                    <p>{beer.serving_style}</p>
                    <Link to={`/edit_beer/${beer.id}`}>Update Beer</Link>
                    <div className="create-review-button">Drinking this beer now?<Link to="/create_review" id="text-link"> Check-in and add a Review!</Link></div>
                </div>
                
                
            </div>
            <div>Reviews

                </div>
            </>
        )
    }

}

export default BeerShow