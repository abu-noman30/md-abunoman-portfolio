import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
	return (
		<>
			{/* Root Container */}
			<div className='root-container'>
				{/* Navbar Section */}
				<section className='navbar-section' id='home'>
					<Navbar />
				</section>
				{/* Outlet Section */}
				<section className='outlet-section'>
					<Outlet />
				</section>

				{/* Footer Section */}
				<section className='footr-section'>
					<Footer />
				</section>
			</div>
		</>
	);
};

export default Root;
