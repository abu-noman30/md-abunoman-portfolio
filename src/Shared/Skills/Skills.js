import React from 'react';

const Skills = () => {
	return (
		<>
			{/* Skills Container */}
			<div className='skills-container'>
				<div className=''>
					<h1 className=' text-2xl font-bold underline underline-offset-2 mb-5 text-center'>
						Skills{' '}
					</h1>

					<div className=' space-y-8'>
						<div className=''>
							<h1> FRONT END</h1>
							<div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
								<div
									className='bg-gradient-to-r from-blue-400 to-blue-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
									style={{ width: '90%' }}
								>
									90%
								</div>
							</div>
						</div>
						<div className=''>
							<h1> BACK END</h1>
							<div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
								<div
									className='bg-gradient-to-r from-blue-400 to-blue-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
									style={{ width: '70%' }}
								>
									70%
								</div>
							</div>
						</div>
						<div className=''>
							<h1>PROBLEM SOLVING</h1>
							<div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
								<div
									className='bg-gradient-to-r from-blue-400 to-blue-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
									style={{ width: '80%' }}
								>
									80%
								</div>
							</div>
						</div>
						{/* <div className=''>
							<h1> FRONT END</h1>
							<div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
								<div
									className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
									style={{ width: '10%' }}
								>
									45%
								</div>
							</div>
						</div>
						<div className=''>
							<h1> FRONT END</h1>
							<div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
								<div
									className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
									style={{ width: '10%' }}
								>
									45%
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
