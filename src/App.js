// Functionality imports
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FormContext } from './FormContext';
import './App.css';
// Component imports
import Nav from './Nav';
import Search from './Search';
import ResultsList from './ResultsList';
import DetailResult from './DetailResult';
// Hard coded data imports. Keeping to work on future revisions
// import singlePicture from './today-response-data.json';
// import picturesList from './random-count-data.json';

function App() {
	// URL format to display random images. countValue is how many random images to display. Was keeping in file for future updates
	// const randomCountUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=${countValue}`;

	const [specificDateValue, setSpecificDateValue] = useState('');
	const [fromDateValue, setFromDateValue] = useState('');
	const [toDateValue, setToDateValue] = useState('');

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
						<Route
							path='/resultslist/:startDate/:endDate'
							element={<ResultsList />}
						/>
						<Route path='detailresult/:date' element={<DetailResult />} />
					</Routes>
				</FormContext.Provider>
			</main>
		</div>
	);
}

export default App;
