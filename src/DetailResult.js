import React from 'react';
import singlePicture from './today-response-data.json';

function DetailResult(props) {
	return (
		<div className='detail-result-container'>
			{console.log(singlePicture)}
			<h1 className='detail-result-picture-title'>{singlePicture.title}</h1>
			<img src={singlePicture.hdurl} alt={singlePicture.title} />
			<div className='detail-result-text-container'>
				<h4>Picture Date: {singlePicture.date}</h4>
				<h4>
					{' '}
					Photo Credit: {singlePicture.copyright ? singlePicture.copyright : 'Unknown'}
				</h4>
			</div>
                <h4 className='description-header'>Description</h4>
                <p>{singlePicture.explanation}</p>
		</div>
	);
}

export default DetailResult;
