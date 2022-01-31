import React from 'react';


class BeerShow extends React.Component {
    constructor(props) {
        super(props)
        
        
    }

    componentDidMount() {
        this.props.fetchBeer(this.props.match.params.beerId);
    }

    render() {
        const  beer  = this.props.beer
        console.log(beer)
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
                <div className= 'beer-name'>
                    {beer.name}
                </div>
                <p>{beer.brewery.name}</p>
                <p>{beer.serving_style}</p>
            </div>
            </>
        )
    }

}

export default BeerShow