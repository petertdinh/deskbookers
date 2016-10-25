import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const SearchResult = (props) => (
	<div className="search-result" style={{backgroundImage: `url(${props.thumbnail})`, backgroundSize: '100%', height: 210, width: 316}}>	
				<div className="name-location">
					<span className="name">{props.name}</span><br/>
					<span className="location">{props.location}</span>
				</div>
				<div className="rating-price">
					{
						props.rating ?
					<StarRatingComponent 
						className="rating"
						name="ratel"
						starCount={5}
						emptyStarColor="white"
						value={Math.round(props.rating)/2} /> :
						<span></span>
					}
					<div className="prices">
						<span className="hour-price">{` €${props.hourPrice}/hour `}</span><br />
						<span className="day-price">{props.dayPrice ? ` €${props.dayPrice}/day ` : null}</span>
					</div>
				</div>
	</div>
);

export default SearchResult;