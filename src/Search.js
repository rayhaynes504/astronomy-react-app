import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailResult from './DetailResult';
import { FormContext } from './FormContext';
import TodayResult from './TodayResult';
import singlePicture from './today-response-data.json'

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
	const [todayData, setTodayData] = useState(null)

	// to set values to empty when returning to this page from a  result page
	useEffect(() => {
		fetchTodayData()
		return () => {

			setSpecificDateValue('');
			setFromDateValue('');
			setToDateValue('');
		}
		//eslint-disable-next-line
	}, []);

	//return in useEffect to cleanup remaining values in input form

	const todayUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

	function fetchTodayData () {
		fetch(todayUrl)
		.then((res) => res.json())
		.then((json) => {console.log(json); setTodayData(json)})
		.catch(console.error)
	}

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
			navigate(`/resultslist/${fromDateValue}/${toDateValue}`);
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
			<TodayResult todayData={todayData}/>
		</div>
	);
}

export default Search;
