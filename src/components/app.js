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
			activeImage: 0 };
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
      </div>
    );
  }
}
