import React from 'react';
import BottomNavigation from '../../Components/BottomNavigation/BottomNavigation';
import Header from '../../Layouts/Header/Header';
import About from '../../Shared/About/About';
import Education from '../../Shared/Education/Education';
import Skills from '../../Shared/Skills/Skills';
import Technologies from '../../Shared/Technologies/Technologies';

const Home = () => {
	return (
		<>
			{/* Home Container */}
			<div className='home-container'>
				{/* Header Section */}
				<section className='header-section'>
					<Header />
				</section>
				{/* About Container */}
				<div className='about-container pb-2'>
					<About />
				</div>
				{/* Skills & Technologies Container */}
				<div className='skills-tec-container pb-2 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
					{/* Skills Container */}
					<div className='col-span-2 md:col-span-1'>
						<Skills />
					</div>
					{/* Technologies Container */}
					<div className='col-span-2 md:col-span-1'>
						<Technologies />
					</div>
				</div>
				{/* Education Container */}
				<section className='education-section'>
					<Education />
				</section>
				<section className='bottom-navigation-section'>
					<BottomNavigation />
				</section>
			</div>
		</>
	);
};

export default Home;
