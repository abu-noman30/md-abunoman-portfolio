import React from 'react';
import BottomNavigation from '../../Components/BottomNavigation/BottomNavigation';
import Header from '../../Layouts/Header/Header';
import About from '../../Shared/About/About';
import Contact from '../../Shared/Contact/Contact';
import Education from '../../Shared/Education/Education';
import Project from '../../Shared/Project/Project';
import Skills from '../../Shared/Skills/Skills';
import Technologies from '../../Shared/Technologies/Technologies';
import WorkExperience from '../../Shared/WorkExperience/WorkExperience';

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
				{/* Skills & Technologies Section */}
				<div className='skill-and-technologies-container'>
					<div className='flex flex-col items-center justify-center space-y-3 mb-8  w-10/12 mx-auto '>
						<h1 className='text-3xl md:text-4xl font-semibold text-white capitalize  text-center drop-shadow-lg shadow-white'>
							SKILLS & TECHNOLOGIES
						</h1>
						<progress className='progress w-72 text-blue-500'></progress>
					</div>
					<div className='skills-tec-container pb-2 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
						{/* Skills Container */}
						<div className='col-span-2 md:col-span-1'>
							<Skills />
						</div>
						{/* Technologies Section */}
						<div className='col-span-2 md:col-span-1'>
							<Technologies />
						</div>
					</div>
				</div>
				{/* Education Section */}
				<section className='education-section'>
					<Education />
				</section>
				{/* Work Experience Section */}
				<section className='work-experience-section'>
					<WorkExperience />
				</section>
				{/* Projects Section */}
				<section className='projects-conteion' id='projects'>
					<Project />
				</section>
				{/* Contact Section */}
				<section className='contact-section'>
					<Contact />
				</section>
				<section className='bottom-navigation-section'>
					<BottomNavigation />
				</section>
			</div>
		</>
	);
};

export default Home;
