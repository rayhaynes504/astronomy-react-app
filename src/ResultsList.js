import React from 'react';
import { Link } from 'react-router-dom';
import picturesList from './random-count-data.json';

function ResultsList(props) {
	return (
		<>
			<h2 className='results-header'>Results</h2>
			<div className='results-page'>
				{picturesList.map((picture, index) => {
					return (
						<Link to={'/detailresult'} className='picture-container'>
							{console.log(picture)}
							<img src={picture.url} alt={picture.title} />
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
