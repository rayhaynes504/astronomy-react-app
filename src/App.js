import './App.css';
import singlePicture from './today-response-data.json';
import picturesList from './random-count-data.json';
import Nav from './Nav';
import Search from './Search';
import ResultsList from './ResultsList';
import DetailResult from './DetailResult';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FormContext } from './FormContext';

function App() {
	// Different URL formats for searches
	// const todayUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

	// const dateRangeUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${fromDateValue}&end_date=${toDateValue}}`;

	// const randomCountUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY&count=${countValue}}`;

	

	// Test Fetch
	// function testApi() {
	// 	fetch(todayUrl)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			console.log(json);
	// 		})
	// 		.catch(console.error);
	// }

	// testApi()
	
		const [specificDateValue, setSpecificDateValue] = useState('');
		const [fromDateValue, setFromDateValue] = useState('');
		const [toDateValue, setToDateValue] = useState('');


		// FETCH CALL UPDATE
	// useEffect(() => {
	// 	fetchApi()
	// }, [])

	// const fetchApi = () => {	
	// const specificDateUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${specificDateValue}`;

	// fetch(specificDateUrl)
	// .then(res => res.json())
	// .then(res => {
	// 	console.log(res)
	// })
	// }

	return (
		<div className='entire-page'>
			<Nav />
			<main>
				<FormContext.Provider
					value={{
						specificDateValue,
						setSpecificDateValue,
						fromDateValue,
						setFromDateValue,
						toDateValue,
						setToDateValue,
					}}>
					<Routes>
						<Route path='/' element={<Search />} />
						<Route path='/resultslist/from:startDate/to:endDate' element={<ResultsList />} />
						<Route path='/:date' element={<DetailResult />} />
					</Routes>
				</FormContext.Provider>
			</main>
		</div>
	);
}

export default App;
