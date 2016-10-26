import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import Carousel from '../../src/components/carousel';
import App from '../../src/components/app';

describe('Carousel', () => {
	chai.use(chaiEnzyme());
	let wrapper;
	const { handleRightArrowClick } = mount(<App />).node;

	beforeEach(() => {
		wrapper = shallow(<Carousel
			activeImage={0}
			handleRightArrowClick={handleRightArrowClick}
			carouselImages={['a', 'b']}/>);
	});

	it('sends you to the next photo on activeImage prop change', () => {
		wrapper.setProps({activeImage: 1});
		expect(wrapper).to.have.style('left').to.equal('-1007px');
	});
});