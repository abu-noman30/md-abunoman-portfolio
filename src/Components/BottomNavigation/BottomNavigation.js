import React from 'react';
import * as FAIcons from 'react-icons/fa';
import * as MDIcons from 'react-icons/md';

const BottomNavigation = () => {
	return (
		<>
			{/* Bottom Navigation Container */}
			<div className='bottom-navigation-container text-white '>
				<div className='btn-ghost btm-nav  btm-nav-sm w-12 h-[12rem] ml-auto rounded-full shadow-lg flex flex-col items-center justify-around mb-16 py-2'>
					<a
						href='#home-id'
						className='glass py-5 px-2 hover:shadow-lg hover:shadow-black w-full rounded-t-full'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
							/>
						</svg>
						<span className='btm-nav-label'>Home</span>
					</a>
					<a
						href='#aboutme-id'
						className='glass py-5 px-2 hover:shadow-lg hover:shadow-black w-full '
					>
						<div>
							<FAIcons.FaUser />
						</div>
						<span className='btm-nav-label'>About</span>
					</a>
					<a
						href='#projects-id'
						className='glass py-5 px-2 hover:shadow-lg hover:shadow-black w-full '
					>
						<div>
							<FAIcons.FaProjectDiagram />
						</div>
						<span className='btm-nav-label'>Project</span>
					</a>
					<a
						href='#contact-id'
						className='glass py-5 px-2 hover:shadow-lg hover:shadow-black w-full rounded-b-full'
					>
						<div>
							<MDIcons.MdContactMail />
						</div>
						<span className='btm-nav-label'>Contact</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default BottomNavigation;
