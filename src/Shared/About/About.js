import React from 'react';

const About = () => {
	return (
		<>
			{/* About Container */}
			<div className='about-container w-10/12 mx-auto mb-16 '>
				<div className='flex flex-col items-center justify-center space-y-3 mb-10'>
					<h1 className='text-3xl font-semibold text-white capitalize lg:text-4xl text-center drop-shadow-lg shadow-white'>
						LET ME INTRODUCE MYSELF
					</h1>
					<progress className='progress w-72 text-blue-500'></progress>
				</div>
				{/* Image Container */}
				<div className='col-span-2 flex flex-col items-center justify-center mb-0 lg:mb-10'>
					<div className='avatar w-48 rounded ring ring-primary ring-offset-base-100 ring-offset-2 mt-8 '>
						<img src='Images/Noman(5).jpg' alt='' />
					</div>
					<h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl lg:text-5xl font-extrabold text-transparent  my-5 text-center'>
						MD. ABU NOMAN
					</h1>
				</div>

				{/* About */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
					<div className='flex flex-col italic pt-6 mb-10  '>
						<div className='  space-y-2'>
							<p className='text-zinc-300'>
								<span className=' text-white font-bold underline underline-offset-2  '>
									BirthDate:
								</span>{' '}
								"30th October 1997"{' '}
							</p>
							<p className='text-zinc-300'>
								<span className=' text-white font-bold underline underline-offset-2  '>
									Age:
								</span>{' '}
								"25 Years"{' '}
							</p>
							<p className='text-zinc-300'>
								<span className=' text-white font-bold underline underline-offset-2  '>
									Home Town:
								</span>{' '}
								"Bogura, Bangladesh"{' '}
							</p>
							<p className='text-zinc-300'>
								<span className=' text-white font-bold underline underline-offset-2  '>
									Current City:
								</span>{' '}
								"Dhaka, Bangladesh"{' '}
							</p>
							<p className='text-zinc-300'>
								<span className=' text-white font-bold underline underline-offset-2  '>
									Moblile:
								</span>{' '}
								"+8801521309669"{' '}
							</p>
							<p className='text-zinc-300'>
								<span className=' text-white font-bold underline underline-offset-2  '>
									Email:
								</span>{' '}
								"md.abunoman1997@gmail.com"{' '}
							</p>
						</div>
					</div>
					<div className='text-justify'>
						<blockquote>
							<span className='text-lg italic font-serif text-zinc-400 '>
								Working with Full Stack Web Development(MERN) to build Websites
								that are User-Friendly on the Front-end and Server-side. Staying
								up-to-date with modern Web technologies is always a Priority for
								me.
								<br />
								Travel is something I am interested in. There is nothing I love
								more than eating food. Movies and Tv Drama Shows have also been
								of interest to me. As well as watching movies or watching shows,
								I go on tours to refresh my mind."
							</span>
						</blockquote>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
