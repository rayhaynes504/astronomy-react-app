import React from 'react';

function About(props) {
	return (
		<div className='modal'>
			<h4>Welcome to the Astronomy Picture Search!</h4>
			<p>
				This app uses NASA's Astronomy Picture of the Day API to bring forth
				every picture uploaded since 1995!
			</p>
			<p>
				Search for a detailed result by inputting a date into the top search
				field.
			</p>
			<p>
				Search for a list of pictures by using the date range search field.
				Click on a result to view its detailed information.
			</p>
			<button
				className='modal-close'
				onClick={(event) => {
					props.setModalState(false);
				}}>
				X
			</button>
		</div>
	);
}

export default About;
