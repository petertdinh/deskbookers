import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { animateScroll } from 'react-scroll';
import NavBar from './nav_bar';
import Carousel from './carousel';
import SearchBar from './search_bar';
import SearchResult from './search_result';
import MapComponent from './map_component';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//some nice office images grabbed from the web
			carouselImages: [
				`https://officesnapshots.com/wp-content/uploads/2016/05/dsp-nice-office-design-6.jpg`,
				`https://static.pexels.com/photos/28756/pexels-photo.jpg`,
				`https://static.pexels.com/photos/7070/space-desk-workspace-coworking.jpg`,
				`http://cdn5.thinkcomputers.org/wp-content/uploads/2015/11/office-lighting-166.jpg`,
				`http://www.maintainwithfresh.com/images/office/office.jpg`,
			], 
			searchBarInput: '',
			//denotes the current image by index
			activeImage: 0,
			searchResults: [],
			//depending on what the search was, the map would center on that region
			mapCenter: {}
		};
	}

	onSearchSubmit = (location) => {
		this.setState({mapCenter: {}, searchBarInput: ''});
		animateScroll.scrollTo(500, {
			smooth: true,
			duration: 200,
		});

		fetch(`https://www.deskbookers.com/nl-nl/sajax.json?q=${location}`)
		//all locations served by deskbookers can be searched
			.then(resp => resp.json())
			.then(json => {
				this.setState({searchResults: json.rows, mapCenter: json.extraCoordinates[0]});
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
  	while(renderedResults.length % 2 !== 0) {
  		renderedResults.pop();
  	}
  	//to denote where each of the individual map markers land on the map
  	const markers = this.state.searchResults.reduce((prev, current) => {
  		const { coordinate, id } = current;
  		const markerObj = {position: {lat: coordinate[0], lng: coordinate[1]}, key: id, defaultAnimation: 2};
  		prev.push(markerObj);
  		return prev;
  	}, []);

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
      	<div className="results-map-container">
	      	<div className="results-container">
	      		{renderedResults}
	      	</div>
	      	{this.state.mapCenter.lat ? <MapComponent
	      		      		containerElement={<div className="map"/>}
	      		      		mapElement={<div className="map-element" />}
	      		      		lat={this.state.mapCenter.lat}
	      		      		lng={this.state.mapCenter.lng}
	      		      		markers={markers} /> : null}
      	</div>
      </div>
    );
  }
}
