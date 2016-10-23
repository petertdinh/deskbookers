import React from 'react';

const Carousel = (props) => (
	<div className="carousel">
		<div className="headline">{props.currentOffice}</div>
		<span>{`<`}</span>
		<img src={props.currentImage} />
		<span>{`>`}</span>
	</div>
)

export default Carousel;