import React from 'react';
import {Link} from 'react-router-dom';

class BeerIndex extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.fetchBeers();
        console.log('beer!')
    }

    render() {
        const beers = this.props.beers
        console.log(beers)
        if (!beers) {
            console.log('!beers')
            return (
                <>
                <div className="buffer"></div>
                <p>Loading</p>
                </>
            )
        }
        
        return (
             <>
                <div className="buffer"></div><div>
                <h1 className = "header">Beer Index</h1>
                <ul className = "beer-index">
                    {
                        beers.map(beer => {
                            return (<li className = "beer-index-item" key={beer.id}>
                                <img className = 'beer-thumbnail' src="/assets/trappist10.jpeg" alt={beer.name} />
                                <Link to={`/beers/${beer.id}`}><h3>{beer.name}</h3></Link>
                                <ul>
                                    <li>Brewery: {beer.brewery.name}</li>
                                    <li>Country: {beer.brewery.country}</li>
                                </ul>
                            </li>)
                        })
                    }
                </ul>
         
                </div>
            </>
        );
    }
}

export default BeerIndex;