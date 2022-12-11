import React from 'react';

const SingleEducation = (props) => {
	const { educationData } = props;
	const { name, image, logo, session } = educationData;
	return (
		<>
			{/* Single Education Container */}
			<div className='single-education-container shadow-lg rounded-lg shadow-gray-900'>
				<div className='w-full  mx-auto overflow-hidden rounded-lg shadow-lg'>
					<div className='h-40 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600'>
						<div className='flex justify-center'>
							<img
								src={image}
								alt=''
								className='w-full h-[10rem] object-fill'
							/>
						</div>
						<div className='flex justify-center'>
							<img
								className='object-cover w-24 h-24 -mt-12 border-4 border-blue-600 rounded-full bg-gray-200'
								src={logo}
								alt=''
							/>
						</div>
					</div>
					<div className='px-6 py-4'>
						<div className='flex justify-center mt-10 mb-4 text-xl font-medium text-center'>
							{name}
						</div>
						<div className='flex w-full text-gray-600 items-center justify-center'>
							<span>{session}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleEducation;
