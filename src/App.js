import './App.css';
import singlePicture from './today-response-data.json';
import picturesList from './random-count-data.json';
import Nav from './Nav';
import Search from './Search';
import ResultsList from './ResultsList';
import DetailResult from './DetailResult';
import { Route, Routes } from 'react-router-dom';

function App() {
	// Different URL formats for searches
	// const todayUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

	// const dateRangeUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${fromDateValue}&end_date=${toDateValue}}`;

	// const randomCountUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY&count=${countValue}}`;

	// console.log(singlePicture);
	// console.log(picturesList);

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

	return (
		<div className='entire-page'>
			<Nav />
			<main>
				<Routes>
					<Route path='/search' element={<Search />} />
					<Route path='/resultslist' element={<ResultsList />} />
					<Route path='/detailresult' element={<DetailResult />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
