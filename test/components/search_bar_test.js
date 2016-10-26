import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchBar from '../../src/components/search_bar';
import App from '../../src/components/app';

describe('SearchBar', () => {
	let wrapper;
	let AppComponent;

	beforeEach(() => {
		AppComponent = shallow(<App />);
		wrapper = shallow(<SearchBar parent={AppComponent}/>);
	});

	it('is a form and features a button', () => {
		expect(wrapper.childAt(0).type()).to.equal('form');
		expect(wrapper.childAt(0).find('.button').type()).to.exist;
	});

	it('correctly displays the input from its parent', () => {
		wrapper.find('input[type="text"]').simulate('change', {target: {value: 'Amsterdam'}});
		expect(AppComponent.state().searchBarInput).to.equal('Amsterdam');
	});
});