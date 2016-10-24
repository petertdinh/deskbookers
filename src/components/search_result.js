import React from 'react';

const SearchResult = (props) => (
	<span className="search-result" style={{backgroundImage: `url(${props.thumbnail})`, backgroundSize: '100%', height: 210, width: 316}}onClick={() => props.setCurrentOffice() }>	
				<div className="name-location">
					<span className="name">{props.name}</span><br/>
					<span className="location">{props.location}</span>
				</div>
				<div className="rating-price">
					<span className="rating">Rating: {props.rating ? Math.round(props.rating) : `N/A`}</span>
					<div className="prices">
						<span className="hour-price">{` €${props.hourPrice}/hour `}</span><br />
						<span className="day-price">{` €${props.dayPrice}/day `}</span>
					</div>
				</div>
	</span>
);

export default SearchResult;