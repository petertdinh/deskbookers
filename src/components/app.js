import React, { Component } from 'react';
import NavBar from './nav_bar';
import Carousel from './carousel';
import SearchBar from './search_bar';
import SearchResult from './search_result';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			carouselImages: [
				`https://media.glassdoor.com/l/c2/4e/cc/16/nice-israel-r-and-d-office.jpg`,
				`https://static.pexels.com/photos/28756/pexels-photo.jpg`,
				`https://static.pexels.com/photos/7070/space-desk-workspace-coworking.jpg`,
				`http://cdn5.thinkcomputers.org/wp-content/uploads/2015/11/office-lighting-166.jpg`,
				`http://www.maintainwithfresh.com/images/office/office.jpg`,
			], 
			currentImage: `https://media.glassdoor.com/l/c2/4e/cc/16/nice-israel-r-and-d-office.jpg`, 
			searchBarInput: '',
			activeImage: 0,
			searchResults: [] };
	}

	onSearchSubmit = () => {
		fetch(`https://www.deskbookers.com/nl-nl/sajax.json?q=Amsterdam&type=-&people=any&favorite=0&pid=&sw=52.293753%2C4.634942&ne=52.455562%2C5.162286&ids=17201%2C19640%2C13692%2C13691%2C12136%2C17938%2C15292%2C14886%2C14885%2C14884%2C14883%2C15730%2C15353%2C15351%2C15330%2C15080%2C17290%2C15454%2C15451%2C15379`)
			.then(resp => resp.json())
			.then(json => {
				this.setState({searchResults: json.rows});
			});
	}

	handleRightArrowClick = () => {
		if(this.state.activeImage !== this.state.carouselImages.length-1) {
			this.setState({activeImage: this.state.activeImage+1});
		} else {
			this.setState({activeImage: 0});
		}
	}

	handleLeftArrowClick = () => {
		if(this.state.activeImage !== 0) {
			this.setState({activeImage: this.state.activeImage-1});
		} else {
			this.setState({activeImage: this.state.carouselImages.length-1});
		}
	}

  render() {
  	const renderedResults = this.state.searchResults.map(result => {
  		const { id, name, location_name, rating, hour_price, day_price, image_urls } = result;
  		return (
  			<SearchResult 
  				key={id}
  				name={name}
  				location={location_name} 
  				rating={rating} 
  				hourPrice={hour_price} 
  				dayPrice={day_price}
  				thumbnail={image_urls[0]} />
  		)
  	});

    return (
      <div>
      	<NavBar />
      	<Carousel
      		handleRightArrowClick={this.handleRightArrowClick}
      		handleLeftArrowClick={this.handleLeftArrowClick}
      		activeImage={this.state.activeImage}
      		carouselImages={this.state.carouselImages} />
      	<SearchBar
      		onSearchSubmit={this.onSearchSubmit}
      		searchBarInput={this.state.searchBarInput} 
      		parent={this} />
      	<div className="results-container">
      		{renderedResults}
      	</div>
      </div>
    );
  }
}
