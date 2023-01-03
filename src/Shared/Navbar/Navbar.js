import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	return (
		<>
			{/* Navbar Container */}
			<div className='navbar-container text-white shadow-xl '>
				<div className='navbar flex justify-between items-center w-10/12 mx-auto'>
					<div className='navbar-start'>
						<div className='dropdown'>
							<label tabIndex={0} className='btn btn-ghost lg:hidden'>
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
										d='M4 6h16M4 12h8m-8 6h16'
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className=' menu menu-compact dropdown-content mt-3 p-2 rounded-lg shadow-lg shadow-gray-500 w-52 bg-gradient-to-r from-blue-600 to-black '
							>
								<NavLink
									to='/'
									className='btn m-1 glass normal-case text-lg  text-white '
								>
									<li>HOME</li>
								</NavLink>
								<hr />
								<NavLink
									to='/blog'
									className='btn m-1 glass normal-case text-lg  text-white '
								>
									<li>BLOG</li>
								</NavLink>
							</ul>
						</div>
						<NavLink
							to='/'
							className='btn btn-ghost normal-case text-lg md:text-2xl'
						>
							MD. ABU NOMAN
						</NavLink>
					</div>
					<div className='navbar-center hidden lg:flex'>
						<ul className='menu menu-horizontal p-0'>
							<NavLink
								to='/home'
								className='btn glass normal-case text-lg text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-zinc-500 hover:text-white transition duration-500 ease-in-out'
							>
								<li>HOME</li>
							</NavLink>

							<NavLink
								to='/blog'
								className='btn glass normal-case text-lg text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-zinc-500 hover:text-white transition duration-500 ease-in-out ml-5'
							>
								<li>BLOG</li>
							</NavLink>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
