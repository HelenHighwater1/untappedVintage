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
                <ul>
                    {
                        beers.map(beer => {
                            console.log('inside the map')
                            return (<li>
                                <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
                                <p>country: {beer.brewery.country}</p>
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