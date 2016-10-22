import React, { Component } from 'react';
import NavBar from './nav_bar';
import Carousel from './carousel';
import SearchBar from './search_bar';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {

	}
  render() {
    return (
      <div>
      	<NavBar />
      	<Carousel />
      	<SearchBar />
      </div>
    );
  }
}
