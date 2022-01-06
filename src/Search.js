import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search(props) {
	const [specificDateValue, setSpecificDateValue] = useState('');
	const [fromDateValue, setFromDateValue] = useState('');
	const [toDateValue, setToDateValue] = useState('');

	const dateRangeUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${fromDateValue}&end_date=${toDateValue}}`;

	function grabInputValue(event) {
		event.preventDefault();
		if (event.target[0].value) {
			console.log(specificDateValue);
		}
		if (event.target[1].value && event.target[2].value) {
			console.log(fromDateValue, toDateValue);
			console.log(dateRangeUrl);
		}
	}

	function changeHandler(event) {
		if (event.target.id === 'date-box') {
			setSpecificDateValue(event.target.value);
		}
		if (event.target.id === 'from-date') {
			setFromDateValue(event.target.value);
		}
		if (event.target.id === 'to-date') {
			setToDateValue(event.target.value);
		}
	}

	return (
		<div className='search-container'>
			<h1>Search For Your Images</h1>
			<form onSubmit={grabInputValue} onChange={changeHandler}>
				<label htmlFor='date-box'>Search specific date:</label>
				<input id='date-box' type='date' min='1995-06-16' />
				{/* <button>Search!</button> */}
				<p>Or date range</p>
				<label htmlFor='from-date'>From:</label>
				<input id='from-date' type='date' min='1995-06-16' />
				<label htmlFor='to-date'>To:</label>
				<input id='to-date' type='date' />
				<Link to={specificDateValue ? '/detailresult' : '/resultslist'}>
					<button>Search!</button>
				</Link>
			</form>
		</div>
	);
}

export default Search;
