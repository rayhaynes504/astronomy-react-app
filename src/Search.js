import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

function Search(props) {
	const {
		specificDateValue,
		setSpecificDateValue,
		fromDateValue,
		setFromDateValue,
		toDateValue,
		setToDateValue,
	} = useContext(FormContext);
	const navigate = useNavigate();

	// to set values to empty when returning to this page from a  result page
	useEffect(() => {
		setSpecificDateValue('');
		setFromDateValue('');
		setToDateValue('');
		//eslint-disable-next-line
	}, []);

	//return in useEffect to cleanup remaining values in input form

	// const dateRangeUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${fromDateValue}&end_date=${toDateValue}}`;

	// function grabInputValue(event) {
	// 	event.preventDefault();
	// 	if (event.target[0].value) {
	// 		console.log(specificDateValue);
	// 	}
	// 	if (event.target[1].value && event.target[2].value) {
	// 		console.log(fromDateValue, toDateValue);
	// 		console.log(dateRangeUrl);
	// 	}
	// }

	function handleSubmit(event) {
		event.preventDefault();
		if (specificDateValue) {
			navigate(`/${specificDateValue}`);
		} else if (fromDateValue && toDateValue) {
			navigate(`/resultslist/from${fromDateValue}/to${toDateValue}`);
		}
	}

	return (
		<div className='search-container'>
			<h1>Search For Your Images</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='date-box'>Search specific date:</label>
				<input
					id='date-box'
					type='date'
					min='1995-06-16'
					onChange={(event) => {
						setSpecificDateValue(event.target.value);
					}}
				/>
				{/* <button>Search!</button> */}
				<p>Or date range</p>
				<label htmlFor='from-date'>From:</label>
				<input
					id='from-date'
					type='date'
					min='1995-06-16'
					onChange={(event) => {
						setFromDateValue(event.target.value);
					}}
				/>
				<label htmlFor='to-date'>To:</label>
				<input
					id='to-date'
					type='date'
					onChange={(event) => {
						setToDateValue(event.target.value);
					}}
				/>

				<button type='submit'>Search!</button>
			</form>
		</div>
	);
}

export default Search;
