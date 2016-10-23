import React from 'react';

const Carousel = (props) => (
	<div className="carousel">
		<div className="headline">{props.currentOffice}</div>
		<span onClick={() => props.leftArrowClick()}>{`<`}</span>
		<img src={props.currentImage} />
		<span onClick={() => props.rightArrowClick()}>{`>`}</span>
	</div>
)

export default Carousel;