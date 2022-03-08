import React from 'react';
import BreweryComboBox from './combo_box';
// import { Link } from 'react-router-dom';
import { fetchBreweries } from '../../actions/brewery_actions';

class CreateBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            brewery: '',
            serving_style: '',
            photoFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.findBreweryId = this.findBreweryId.bind(this)
        
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }
    
    componentWillUnmount() {
        this.props.receiveBeerErrors([])
    }
    updateSelect(field) {
        return input => this.setState({ [field]: input })
    }

    handleSubmit(e) {
        e.preventDefault()
        let breweryId = this.findBreweryId(this.state.brewery)
        this.setState({brewery_id: breweryId})

        const formData = new FormData();
        formData.append('beer[name]', this.state.name)
        formData.append('beer[brewery_id]', breweryId)
        formData.append('beer[serving_style]', this.state.serving_style)
        if (this.state.photoFile) formData.append('beer[photo]', this.state.photoFile)      
    

        $.ajax({
            url: '/api/beers',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        })

            .then(() => this.props.history.push('/beers'));

    }

    findBreweryId(brewery) {
        console.log(this.props.breweries)
        if (this.props.breweries) {
            let arr = this.props.breweries
            let obj = arr.find(breweryObject => {
                return breweryObject.name === `${brewery}`
            })
            console.log(obj)
            return obj.id
        }

    }

    componentDidMount() {
        this.props.fetchBreweries();
    }
    
    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]})
    }

    renderErrors(){
        if(!this.state.errors) return '';
        return (
            <div>
                {this.state.errors.map((error, idx) => {
                return (<div key={idx}> {error} </div>)
                    })}
            </div>
        )
    }


//     if (!this.state.errors.length) return '';
//     return (
//       <div className='card-form-errors'>
//         {this.state.errors.map((error,idx) => {
//           return (<div key={idx}> {error} </div>)
//         })}
//       </div>)
//   }
    render() {
        const breweries = this.props.breweries
        // const errors = this.props.errors.map((error, idx) => {
        //     return (<div key={idx}> {error} </div>)
        // })
        const displayErrors = this.props.errors.length > 0 ? "show-errors" : 'hidden'
        // MAKE ERRORS POP UP
        let breweryComboBox = null
        if (breweries.length > 0) {
            breweryComboBox = <BreweryComboBox breweries={breweries} onChange={this.update('brewery_id')} onSelect={this.updateSelect('brewery_id')} />
        }
    
        return (
           <div>
               <div className="buffer"></div>
                
                <form className='beer-form' onSubmit={this.handleSubmit}> 
                    <h1 padding="10px">Create A New Beer</h1>
                        <ul className={displayErrors}>
                            {this.renderErrors()}
                        </ul>
                    <label>Beer Name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                    />
                    <label>Brewery</label>
                    {breweryComboBox }
                    <label>Serving Style:</label>
                    <textarea
                        value={this.state.serving_style}
                        onChange={this.update('serving_style')}
                    />
                    <br/>
                    <label>Add a Photo</label>
                    <input 
                        type='file'
                        onChange={this.handleFile.bind(this)}
                    />
                    <br />
                    <button type='submit'>Create Beer!</button>

                </form>
             
           </div>
                
           
        )
    }
}

export default CreateBeer