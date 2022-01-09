import React from 'react';

function TodayResult({ todayData }) {
	if (!todayData) {
		return <p>Loading Today's Image...</p>;
	}
	return (
		<div className='today-data-container'>
			<h2>Today's Image: {todayData.title}</h2>
			<img
				src={
					todayData.media_type === 'video'
						? todayData.thumbnail_url
						: todayData.url
				}
				alt={todayData.title}
			/>
			<div className='today-data-text-container'>
				<h5>Photo Credit: {todayData.copyright}</h5>
				<h4 className='today-description-header'>Description</h4>
				<p className='today-description-p'>{todayData.explanation}</p>
			</div>
		</div>
	);
}

export default TodayResult;
