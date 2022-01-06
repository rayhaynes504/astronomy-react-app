import React from 'react';
import picturesList from './random-count-data.json';

function ResultsList(props) {
	return (
		<>
			<h2 className='results-header'>Results</h2>
			<div className='results-page'>
				{picturesList.map((picture, index) => {
					return (
						<div className='picture-container'>
							{console.log(picture)}
							<img src={picture.url} alt={picture.title} />
							<p>Picture Date: {picture.date}</p>
							<p>
								Photo Credit:{' '}
								{picture.copyright ? picture.copyright : 'Unknown'}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default ResultsList;
