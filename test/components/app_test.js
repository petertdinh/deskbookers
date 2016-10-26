import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import fetch from 'isomorphic-fetch';
import App from '../../src/components/app';
import NavBar from '../../src/components/nav_bar';
import Carousel from '../../src/components/carousel';
import SearchBar from '../../src/components/search_bar';

describe('App' , () => {
  let mountedWrapper;

  beforeEach(() => {
    mountedWrapper = mount(<App />);
  });

  it('renders something', () => {
    expect(mountedWrapper).to.exist;
  });

  it('renders the NavBar component', () => {
  	expect(mountedWrapper.find(NavBar)).to.have.lengthOf(1);
  });

  it('renders the Carousel component', () => {
  	expect(mountedWrapper.find(Carousel)).to.have.lengthOf(1);
  });

  it('renders the SearchBar component', () => {
  	expect(mountedWrapper.find(SearchBar)).to.have.lengthOf(1);
  });
});