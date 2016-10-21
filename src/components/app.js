import React, { Component } from 'react';
import NavBar from './nav_bar';
import Carousel from './carousel';
import SearchBar from './search_bar';

export default class App extends Component {
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
