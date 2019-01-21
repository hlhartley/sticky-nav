import React, { Component } from 'react';
import './Locations.css';

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            filteredCities: []
        };
    }

    searchInput(e) {
        this.setState({searchInput: e.target.value}, () => this.findMatches())
    }

    findMatches() {
        let filteredCities=this.props.cities.filter((place) => {
            // return place.city.includes(this.state.searchInput)
            const regex = new RegExp (this.state.searchInput, 'gi')
            return place.city.match(regex) || place.state.match(regex)
        })
        this.setState({filteredCities: filteredCities})
    }
    render() {
        console.log(this.state.filteredCities)
        return (
            <div className={ this.props.navFixed ? "main-content add-margin" : "main-content" }>
                <h2>Locations page</h2>
                <input type='text' placeholder='search cities / states' className='search-cities' onChange={this.searchInput.bind(this)}></input>
                {this.state.filteredCities.map((city) => {
                    return (<div>{city.city}, {city.state}</div>)
                })}
            </div>
        );
    }
}

export default Locations;
