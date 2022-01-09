import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import picturesList from './random-count-data.json';

function ResultsList(props) {
	const [rangeData, setRangeData] = useState(null);
	const { endDate, startDate } = useParams();
	const dateRangeUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=True`;

	function getRangeData() {
		fetch(dateRangeUrl)
			.then((res) => res.json())
			.then((json) => setRangeData(json))
			.catch(console.error);
	}

	useEffect(() => {
		getRangeData();
		//eslint-disable-next-line
	}, []);

	console.log(rangeData)

	if (!rangeData) return <p>Loading data...</p>;

	// Variable switching from hardcoded data file to API data
	let picturesList = rangeData;

	return (
		<>
			<h2 className='results-header'>Results</h2>
			<div className='results-page'>
				{picturesList.map((picture, index) => {
					return (
						<Link
							to={`/${picture.date}`}
							key={picture.date}
							className='picture-container'>
							<img src={picture.media_type === "video" ? picture.thumbnail_url 
							: picture.url} alt={picture.title} />
							<p>Picture Date: {picture.date}</p>
							<p>
								Photo Credit:{' '}
								{picture.copyright ? picture.copyright : 'Unknown'}
							</p>
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default ResultsList;
