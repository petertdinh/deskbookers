import React from 'react';

const Carousel = (props) => (
	<div className="carousel">
		<h2 className="headline">{props.currentOffice}</h2>
		<div className="current-image" style={{backgroundImage: `url(${props.currentImage})`}}>
			<span className="left-arrow" onClick={() => props.leftArrowClick()}>{`<`}</span>
			<span className="right-arrow" onClick={() => props.rightArrowClick()}>{`>`}</span>
		</div>
	</div>
)

export default Carousel;