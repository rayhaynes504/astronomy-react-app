import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<ul className='nav-container'>
			<Link to={'/'}>
				<li className='nav-link'>Home</li>
			</Link>
		</ul>
	);
}

export default Nav;
