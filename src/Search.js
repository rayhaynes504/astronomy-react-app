// functionality imports
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';
// Component imports
import TodayResult from './TodayResult';

// Hardcoded data files. Keeping for future updates
// import DetailResult from './DetailResult';
// import singlePicture from './today-response-data.json';

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
	const [todayData, setTodayData] = useState(null);
	const [errorState, setErrorState] = useState(false);

	useEffect(() => {
		fetchTodayData();
		return () => {
			setSpecificDateValue('');
			setFromDateValue('');
			setToDateValue('');
		};
		//eslint-disable-next-line
	}, []);

	function fetchTodayData() {
		const todayUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&thumbs=True`;
		fetch(todayUrl)
			.then((res) => {
				if (res.status !== 200) {
					setErrorState(true);
				}
				return res.json();
			})
			.then((json) => {
				setTodayData(json);
			})
			.catch(console.error);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (specificDateValue) {
			navigate(`/detailresult/${specificDateValue}`);
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
					min='1995-06-16'
					onChange={(event) => {
						setToDateValue(event.target.value);
					}}
				/>

				<button type='submit'>Search!</button>
			</form>
			<TodayResult todayData={todayData} errorState={errorState} />
		</div>
	);
}

export default Search;
