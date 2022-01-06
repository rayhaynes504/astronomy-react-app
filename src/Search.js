import React from 'react';

function Search(props) {

	function grabInputValue (event) {
		event.preventDefault()
		console.log(event.target[0].value)
	}

	return (
		<div className='search-container'>
			<h1>Search For Your Images</h1>
			<form onSubmit={grabInputValue}>
				<label htmlFor='date-box'>Search specific date:</label>
				<input id='date-box' type='date' min='1995-06-16' />
				{/* <button>Search!</button> */}
				<p>Or date range</p>
				<label htmlFor='from-date'>From:</label>
				<input id='from-date' type='date' min='1995-06-16' />
				<label htmlFor='to-date'>To:</label>
				<input id='to-date' type='date' />
				<button>Search!</button>
			</form>
		</div>
	);
}

export default Search;
