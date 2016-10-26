import React, { Component } from 'react';

const Carousel = (props) => {
	const images = props.carouselImages.map((image, index) => {
		const style = index !== props.activeImage ? "slideOutLeft" : "slideInRight";
		return <div 
						key={index}
						className={`image animated ${style}`}
						style={{backgroundImage: `url(${image})`}} />
	});

	return (
		<div className="carousel">
			{images}
			<a onClick={() => props.handleLeftArrowClick()}className="w3-btn-floating w3-display-left">&#10094;</a>
			<a onClick={() => props.handleRightArrowClick()} className="w3-btn-floating w3-display-right">&#10095;</a>
		</div>
		);
}

export default Carousel;

// export default class Carousel extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {animationClass: 'slideInRight'};
// 	}

// 	componentWillReceiveProps(nextProps) {

// 	}

// 	render() {

// 	}
// }