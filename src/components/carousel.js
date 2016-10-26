import React, { Component } from 'react';

const Carousel = (props) => {
	const style = {left: (props.activeImage * -window.innerWidth) + (17 * props.activeImage), transition: '1s'};
	const images = props.carouselImages.map((image, index) => {
		return <div 
						key={index}
						className="image"
						style={{backgroundImage: `url(${image})`}} />
	});

	return (
		<div className="carousel" style={style}>
			{images}
			<a onClick={() => props.handleLeftArrowClick()}className="left-arrow">&#10094;</a>
			<a onClick={() => props.handleRightArrowClick()} className="right-arrow">&#10095;</a>
		</div>
		);
}

export default Carousel;