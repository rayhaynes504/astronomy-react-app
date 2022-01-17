import  {useState} from 'react';
import { Link } from 'react-router-dom';

import About from './About';


function Nav(props) {
	const [modalState, setModalState] = useState(false)
	return (
		<>
			<ul className='nav-container'>
				<Link to={'/'}>
					<li className='nav-link'>Home</li>
				</Link>

				<li className='nav-link nav-about' onClick={(event) => {setModalState(true)}}>About</li>
			</ul>
			{modalState && <About modalState={modalState} setModalState={setModalState}/>}
		</>
	);
}

export default Nav;
