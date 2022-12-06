import React from 'react';
import { Outlet } from 'react-router-dom';
import Contact from '../../Shared/Contact/Contact';
import Navbar from '../../Shared/Navbar/Navbar';

const Root = () => {
	return (
		<>
			{/* Root Container */}
			<div className='root-container'>
				{/* Navbar Section */}
				<section className='navbar-section'>
					<Navbar />
				</section>
				{/* Outlet Section */}
				<section className='outlet-section'>
					<Outlet />
				</section>
				{/* Contact Section */}
				<section className='contact-section'>
					<Contact />
				</section>
			</div>
		</>
	);
};

export default Root;
