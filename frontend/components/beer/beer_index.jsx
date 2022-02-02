import React from 'react';
import {Link} from 'react-router-dom';

class BeerIndex extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.fetchBeers();
   
    }

    render() {
        const beers = this.props.beers
       
        if (!beers) {
        
            return (
                <>
                <div className="buffer"></div>
                <p>Loading</p>
                </>
            )
        }
        // debugger
        return (
             <>
                <div className="buffer"></div>
                <div>
                <h1 className = "header">Beer Index</h1>
                <ul className = "beer-index">
                    {
                        beers.map(beer => {
                            return (<li className = "beer-index-item" key={beer.id}>
                                <img className='beer-thumbnail' src={beer.photoUrl} alt={beer.name} />
                                <Link to={`/beers/${beer.id}`}><h3>{beer.name}</h3></Link>
                                <ul>
                                    <li>Brewery: {beer.brewery.name}</li>
                                    <li>Country: {beer.brewery.country}</li>
                                </ul>
                            </li>)
                        })
                    }
                </ul>
                    <div className = "create-beer-p">Can't find the beer you are looking for?<span>...</span>  <Link to="./create_beer" id="text-link">  Add your fav beer!</Link></div>
                </div>
            </>
        );
    }
}

export default BeerIndex;