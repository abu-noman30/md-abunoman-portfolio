import React from 'react';
import * as FAIcons from 'react-icons/fa';

const Header = () => {
	return (
		<>
			{/* Header Container */}
			<div className='header-container w-10/12 mx-auto'>
				<section className=' text-white'>
					<div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
						<div className='mx-auto max-w-3xl text-center'>
							<h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl md:text-2xl lg:text-5xl font-extrabold text-transparent sm:text-5xl '>
								Hi...! I'AM
								<br />
								<span className='sm:block my-3 '> MD. ABU NOMAN </span>
								<blockquote>
									<span className='sm:block text-xl md:text-3xl lg:text-5xl'>
										"Professional Web Developer"
									</span>
								</blockquote>
							</h1>
							<div className=' flex items-center justify-center my-10 gap-5'>
								<a
									href='https://www.facebook.com/AbuNoman30'
									target={'_blank'}
									rel='noreferrer'
								>
									<FAIcons.FaFacebook className='w-12 h-12 bg-blue-600 hover:bg-blue-700  p-2 rounded-full' />
								</a>

								<div className=''>
									<a
										href='https://www.linkedin.com/in/md-abu-noman-994a631b0/'
										target={'_blank'}
										rel='noreferrer'
									>
										<FAIcons.FaLinkedin className='w-12 h-12 bg-blue-800 hover:bg-blue-900 p-2 rounded-lg' />
									</a>
								</div>
								<div className=''>
									<a
										href='https://github.com/abu-noman30'
										target={'_blank'}
										rel='noreferrer'
									>
										<FAIcons.FaGithub className='w-12 h-12 bg-purple-800 hover:bg-purple-900 p-2 rounded-full' />
									</a>
								</div>
							</div>
							<div className='mt-8 flex flex-wrap justify-center gap-4'>
								<a
									className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
									href='#contact'
								>
									CONTACT
								</a>

								<a
									className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
									href='https://drive.google.com/file/d/17cUPsi2p52_ivYmmXCEu4YiRCW1lgiqc/view?usp=sharing'
									target={'_blank'}
									rel='noreferrer'
								>
									DOWNLOAD RESUME
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Header;
