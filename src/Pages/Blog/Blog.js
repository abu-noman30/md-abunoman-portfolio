import React from 'react';

const Blog = () => {
	return (
		<>
			{/* Blog Container */}
			<div className='blog-container'>
				<div className='flex flex-col items-center justify-center space-y-3 h-screen'>
					<progress className='progress w-72 text-blue-500'></progress>
					<h1 className='text-3xl font-semibold text-white capitalize lg:text-5xl text-center drop-shadow-lg shadow-white py-3'>
						COMING SOON
					</h1>
					<progress className='progress w-72 text-blue-500'></progress>
				</div>
			</div>
		</>
	);
};

export default Blog;
