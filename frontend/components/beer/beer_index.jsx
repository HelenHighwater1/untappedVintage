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
                    <h1 className="header">Beer Index</h1>
                    <div className='split-page'>
                        <div className='split-main'>
                        
                        <ul className = "beer-index">
                            <h1 className='centered'>Highest Rated</h1>
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
                            <div className="create-beer-p">Can't find the beer you are looking for?<span>...</span>  <Link to="./create_beer" id="text-link">  Add your fav beer!</Link></div>
                        </ul>
                        </div>
                        <div className='split-right'> 
                           <ul className='split-right-ul'> 
                           <h2 className='centered'> "The Older the Better"  </h2>
                           <p className='centered'>Top 5 Beers that age best long-term</p>
                                <li><span className='bold'>Thomas Hardy's Ale</span> best aged 12-25 years <br/>
                                   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8dRYxcEOhJv7ZF2U4GB9QENcGStHbAhJlKw&usqp=CAU'/>
                               </li>      
                                <li> <span className='bold'>Orval </span>best aged 8 years
                                   <img src='https://cdn.hopculture.com/wp-content/uploads/2019/03/Orval-How-to-serve-Orval.jpg' />
                               </li>
                                <li><span className='bold'>Parabola</span> best aged 7 years 
                                   <img src="https://cdn.shopify.com/s/files/1/0067/6030/0609/products/firestone-parabola-2015_1600x.jpg?v=1610490421" />
                               </li>
                                <li><span className='bold'>Westvleteren 12</span> best aged 5 years
                                   <img src="https://www.beeroftheday.com/photos/trappist-westvleteren-12-xii-979_0.jpg" />
                               </li>
                                <li><span className='bold'>Rochefort 10</span> best aged 4 years
                                   <img src="https://www.thefoodlens.com/uploads/2019/03/THE-PUBLICK-HOUSE_THE-FOOD-LENS_BRIAN-SAMUELS-PHOTOGRAPHY_APRIL-2019-0678-copy-1200x800.jpg" />
                               </li>
                            
                           </ul>
                    
                    
                        </div>
                         
                    </div>
                
                </div>
            </>
        );
    }
}

export default BeerIndex;