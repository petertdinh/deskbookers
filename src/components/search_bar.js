import React from 'react';

const SearchBar = props => (
	<div className="search-bar">
		<form  onSubmit={(e) => { props.onSearchSubmit(props.searchBarInput), e.preventDefault() }}>
			<input required type="text" placeholder="Find a place to work" value={props.searchBarInput} onChange={(e) => props.parent.setState({searchBarInput: e.target.value})} />
			<input value="Search" className="button" type="submit" />
		</form>
	</div>
);

export default SearchBar;