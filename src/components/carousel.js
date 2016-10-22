import React from 'react';

const Carousel = (props) => (
	<div className="carousel">
		<span>{`<`}</span>
		<img src={props.firstPicture} />
		<img src={props.secondPicture} />
		<span>{`>`}</span>
	</div>
)

export default Carousel;