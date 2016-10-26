import React from 'react';

const Carousel = props => {
	//the extra 17 pixels is to consider the scrollbar, innerWidth - 17 == actual width of window
	const style = {left: (props.activeImage * -window.innerWidth) + (17 * props.activeImage), transition: '1s'};
	//the arrows move along with each shifting image
	const leftStyle = {left: String(20 * props.activeImage)+'%'};
	const rightStyle = {right: String(80 - 20*props.activeImage)+'%'};

	const images = props.carouselImages.map((image, index) => {
		return <div 
						key={index}
						className="image"
						style={{backgroundImage: `url(${image})`}} />
	});

	return (
		<div className="carousel" style={style}>
			{images}
			<a onClick={() => props.handleLeftArrowClick()} className="left-arrow" style={leftStyle} >&#10094;</a>
			<a onClick={() => props.handleRightArrowClick()} className="right-arrow" style={rightStyle}>&#10095;</a>
		</div>
		);
}

export default Carousel;