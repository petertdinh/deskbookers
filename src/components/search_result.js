import React from 'react';

const SearchResult = (props) => (
	<div className="search-result" onClick={() => props.setCurrentOffice() }>
		<img src={props.thumbnail} height={210} width={316}/>
		<div>
			<div>{props.name}</div>
			<div>
				<span>{props.location}</span>
				<span>{props.rating ? Math.round(props.rating) : `No rating`}</span>
			</div>
		</div>
	</div>
);

export default SearchResult;