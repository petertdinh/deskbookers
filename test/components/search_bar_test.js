import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchBar from '../../src/components/search_bar';

describe('SearchBar', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SearchBar />);
	});

	it('is a form and features a button', () => {
		expect(wrapper.childAt(0).type()).to.equal('form');
		expect(wrapper.childAt(0).find('.button').type()).to.exist;
	});
});