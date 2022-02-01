import React from 'react';
import {Link} from 'react-router-dom';

class BeerShow extends React.Component {
    constructor(props) {
        super(props)
        
        
    }

    componentDidMount() {
        this.props.fetchBeer(this.props.match.params.beerId);
    }

    render() {
        const  beer  = this.props.beer
    
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
                <img className='beer-thumbnail' src="/assets/trappist10.jpeg" alt={beer.name} />
                <div className = "beer-show-info">
                    <h3>{beer.name}</h3>
                    <p>{beer.brewery.name}</p>
                    <p>{beer.serving_style}</p>
                    <Link to={`/edit_beer/${beer.id}`}>Update Beer</Link>
                </div>
            </div>
            </>
        )
    }

}

export default BeerShow