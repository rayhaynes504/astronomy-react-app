import React from 'react';

function TodayResult({ todayData }) {
	if (!todayData) {
		return <p>Loading Today's Image...</p>;
	}

	console.log(todayData)
	return (
		<div className='today-data-container'>
			<h2>Today's Image: {todayData.title}</h2>
			<img
				src={
					todayData.media_type === 'video'
						? todayData.thumbnail_url
						: todayData.hdurl
				}
				alt={todayData.title}
			/>
			<div className='today-data-text-container'>
				<h5>
					Photo Credit: {todayData.copyright ? todayData.copyright : 'Unknown'}
				</h5>
				{todayData.media_type === 'video' && (
					<h5 className='today-data-video-link'>
						Video Link: <a href={todayData.url}>Click Here</a>
					</h5>
				)}
				<h4 className='today-description-header'>Description</h4>
				<p className='today-description-p'>{todayData.explanation}</p>
			</div>
		</div>
	);
}

export default TodayResult;
