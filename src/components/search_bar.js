import React from 'react';

const SearchBar = (props) => (
	<div className="search-bar">
		<form onSubmit={(e)=> { props.onFormSubmit(e.target.value) }}>
			<input type="text" placeholder="Find a place to work" />
			<input className="button" type="submit" />
		</form>
	</div>
);

export default SearchBar;