import React, { Component } from 'react';

const Carousel = (props) => {
	const images = props.carouselImages.map((image, index) => {
		const style = index !== props.activeImage ? {visibility: 'hidden'} : {};
		return <div 
						key={index}
						className="image"
						style={{backgroundImage: `url(${image})`, ...style}} />
	});

	return (
		<div className="carousel">
			{images}
			<a onClick={() => props.handleLeftArrowClick()}className="w3-btn-floating w3-display-left" onclick="plusDivs(-1)">&#10094;</a>
			<a onClick={() => props.handleRightArrowClick()} className="w3-btn-floating w3-display-right" onclick="plusDivs(+1)">&#10095;</a>
		</div>
		);
}

export default Carousel;