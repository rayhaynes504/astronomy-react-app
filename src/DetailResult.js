// Functionality imports
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Hard coded data file. Keeping for future updates
// import singlePicture from './today-response-data.json';

function DetailResult(props) {
	const [errorState, setErrorState] = useState(false);
	const [specificData, setSpecificData] = useState(null);
	const { date } = useParams();

	useEffect(() => {
		getSpecificData();
		//eslint-disable-next-line
	}, []);

	function getSpecificData() {
		const specificDateUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}&thumbs=True`;
		fetch(specificDateUrl)
			.then((res) => {
				if (res.status !== 200) {
					setErrorState(true);
				}
				return res.json();
			})
			.then((json) => {
				setSpecificData(json);
			})
			.catch(console.error);
	}

	if (!specificData) {
		return <p>Loading ...</p>;
	}

	// Variable switching from hardcoded data file to API data
	let singlePicture = specificData;

	return (
		<div className='detail-result-container'>
			<h1 className='detail-result-picture-title'>{singlePicture.title}</h1>
			<img
				src={
					singlePicture.media_type === 'video'
						? singlePicture.thumbnail_url
						: singlePicture.hdurl
				}
				alt={singlePicture.title}
			/>
			<div className='detail-result-text-container'>
				<h4>Picture Date: {singlePicture.date}</h4>
				<h4>
					Photo Credit:{' '}
					{singlePicture.copyright ? singlePicture.copyright : 'Unknown'}
				</h4>
				{singlePicture.media_type === 'video' && (
					<h4 className='detail-result-video-link'>
						Video Link: <a href={singlePicture.url}>Click Here</a>
					</h4>
				)}
			</div>
			<h4 className='description-header'>Description</h4>
			<p className='description-p'>{singlePicture.explanation}</p>
			<p style={{ display: errorState ? 'inline' : 'none' }}>Request invalid</p>
		</div>
	);
}

export default DetailResult;
