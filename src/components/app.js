import React, { Component } from 'react';
import NavBar from './nav_bar';
import Carousel from './carousel';
import SearchBar from './search_bar';
import SearchResult from './search_result';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { currentOffice: '', currentOfficeImages: [], currentImage: '', searchBarInput: '', searchResults: [] };
	}
	componentDidMount() {
		this.fetchOffices('Amsterdam');
	}

	fetchOffices = (location) => {
		fetch(`https://www.deskbookers.com/nl-nl/sajax.json?q=${location}`)
			.then(resp => resp.json())
			.then(json => {
				const { rows } = json;
				this.setState({searchResults: rows, currentOffice: rows[0].name, currentOfficeImages: rows[0].image_urls, currentImage: rows[0].image_urls[0]});
			});
	}

	handleSearchSubmit = (location) => {
		this.fetchOffices(location);
	}

	setCurrentOffice = (office) => {
		this.setState({currentOffice: office.name, currentOfficeImages: office.image_urls, currentImage: office.image_urls[0]});
	}

	handleRightArrowClick = () => {
		
	}

  render() {
  	const renderedResults = this.state.searchResults.map((location) => {
  		const { id, name, rating, location_name, hour_price, day_price, image_urls } = location;
  		return <SearchResult
  							id={id}
  							setCurrentOffice={this.setCurrentOffice.bind(this, location)}
  							name={name}
  							rating={rating}
  							location={location_name}
  							hourPrice={hour_price}
  							dayPrice={day_price}
  							thumbnail={image_urls[0]} />
  	});

    return (
      <div>
      	<NavBar />
      	<SearchBar 
      		searchBarInput={this.state.searchBarInput}
      		onSearchSubmit={this.handleSearchSubmit}
      		parent={this} />
      	<Carousel 
      		currentOffice={this.state.currentOffice}
      		currentImage={this.state.currentImage} />
      	<div className="results-container">
      		{renderedResults}
      	</div>
      </div>
    );
  }
}
