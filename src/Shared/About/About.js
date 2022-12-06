import React from 'react';

const About = () => {
	return (
		<>
			{/* About Container */}
			<div className='about-container w-10/12 mx-auto p-5 mb-10'>
				<h1>About</h1>
				<div className=''>
					<div className='avatar flex items-center justify-center my-5'>
						<div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
							<img src='Images/Noman(5).jpg' alt='' />
						</div>
					</div>
					<div className='about-text  p-4'>
						<h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mb-5 text-center'>
							MD. ABU NOMAN
						</h1>
						<blockquote>
							<span className='text-base italic font-serif text-zinc-400'>
								"I'm Md Abu Noman. Bogura is my home town in Rajshahi Division,
								Bangladesh. Currently living in Dhaka, Bangladesh. Graduated
								from Independent University, Bangladesh(IUB) with a Bachelor's
								degree in Computer Science & Engineering (CSE).
								<br />
								<br />
								I'm now working with Full Stack Web Development(MERN) to build
								Websites that are User-Friendly on the Front-end and
								Server-side. Staying up-to-date with modern Web technologies is
								always a Priority for me.
								<br />
								During my studies, I also worked as a part-time Customer Service
								Representative at a Software Development Company.
								<br />
								<br />
								Travel is something I am interested in. As a result, I visited
								many places in Bangladesh. There is nothing I love more than
								eating food. When I'm stressed, I eat a lot to cope. Movies and
								Tv Drama Shows have also been of interest to me. As well as
								watching movies or watching shows, I go on tours to refresh my
								mind."
							</span>
						</blockquote>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
