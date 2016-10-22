import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NavBar from '../../src/components/nav_bar';

describe('NavBar', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<NavBar />);
	});

	it('features a logo and a title', () => {
		expect(wrapper.find('img')).to.have.lengthOf(1);
		expect(wrapper.find('span').text()).to.equal('React DeskBookers');
	});

});