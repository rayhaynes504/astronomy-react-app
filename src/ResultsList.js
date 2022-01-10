// Functionality imports
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// Hardcoded data. Leaving in for future revisions
// import picturesList from './random-count-data.json';

function ResultsList(props) {
	const [errorState, setErrorState] = useState(false);
	const [rangeData, setRangeData] = useState(null);
	const { endDate, startDate } = useParams();
	const dateRangeUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=True`;

	function getRangeData() {
		fetch(dateRangeUrl)
			.then((res) => {
				if (res.status !== 200) {
					setErrorState(true);
				}
				return res.json();
			})
			.then((json) => setRangeData(json))
			.catch(console.error);
	}

	useEffect(() => {
		getRangeData();
		//eslint-disable-next-line
	}, []);

	if (!rangeData) return <p>Loading data...</p>;

	// Variable switching from hardcoded data file to API data
	let picturesList = rangeData;

	return (
		<>
			<h2 className='results-header'>Results</h2>
			<p className='results-subtext'>Click result for more details</p>
			<div className='results-page'>
				{picturesList.map((picture, index) => {
					return (
						<Link
							to={`/detailresult/${picture.date}`}
							key={picture.date}
							className='picture-container'>
							<img
								src={
									picture.media_type === 'video'
										? picture.thumbnail_url
										: picture.url
								}
								alt={picture.title}
							/>
							<div className='results-text-container'>
								<p>Picture Date: {picture.date}</p>
								<p>
									Photo Credit:{' '}
									{picture.copyright ? picture.copyright : 'Unknown'}
								</p>
							</div>
						</Link>
					);
				})}
				<p style={{ display: errorState ? 'inline' : 'none' }}>
					Request invalid
				</p>
			</div>
		</>
	);
}

export default ResultsList;
