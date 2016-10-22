import React from 'react';

const Carousel = (props) => (
	<div className="carousel">
		<span>{`<`}</span>
		<img src={props.currentImage} />
		<span>{`>`}</span>
	</div>
)

export default Carousel;