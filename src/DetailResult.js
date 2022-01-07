import React, { useEffect, useState } from 'react';
import singlePicture from './today-response-data.json';
import { FormContext } from './FormContext';
import { useContext } from 'react';

function DetailResult(props) {
	const {
		specificDateValue,
		setSpecificDateValue,
		fromDateValue,
		setFromDateValue,
		toDateValue,
		setToDateValue,
	} = useContext(FormContext);
	const [specificData, setSpecificData] = useState(null)

	useEffect(() => {getSpecificData()}, [])

	const specificDateUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${specificDateValue}`;

	function getSpecificData () {
		fetch(specificDateUrl)
		.then((res) => res.json())
		.then((json) => {setSpecificData(json);})
		.catch(console.error)
	}

	if (!specificData) {
		return <p>Loading ...</p>
	}

	let singlePicture = specificData;

	return (
		<div className='detail-result-container'>
			{console.log(singlePicture)}
			<h1 className='detail-result-picture-title'>{singlePicture.title}</h1>
			<img src={singlePicture.hdurl} alt={singlePicture.title} />
			<div className='detail-result-text-container'>
				<h4>Picture Date: {singlePicture.date}</h4>
				<h4>
					{' '}
					Photo Credit:{' '}
					{singlePicture.copyright ? singlePicture.copyright : 'Unknown'}
				</h4>
			</div>
			<h4 className='description-header'>Description</h4>
			<p>{singlePicture.explanation}</p>
		</div>
	);
}

export default DetailResult;
