import React, { Component } from 'react';
import NavBar from './nav_bar';
import Carousel from './carousel';
import SearchBar from './search_bar';

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
				this.setState({searchResults: rows, currentOffice: rows[0], currentOfficeImages: rows[0].image_urls, currentImage: rows[0].image_urls[0]});
			});
	}

	handleSearchSubmit = (location) => {
		this.fetchOffices(location);
	}

  render() {
    return (
      <div>
      	<NavBar />
      	<Carousel currentImage={this.state.currentImage}/>
      	<SearchBar 
      		searchBarInput={this.state.searchBarInput}
      		onSearchSubmit={this.handleSearchSubmit}
      		parent={this} />
      </div>
    );
  }
}
