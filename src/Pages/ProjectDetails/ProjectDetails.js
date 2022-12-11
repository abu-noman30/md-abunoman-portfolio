import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from 'react-slick';

const ProjectDetails = () => {
	const loaderData = useLoaderData();
	const {
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		projectName,
		description,
		tools,
		liveLink,
		clientCode,
		serverCode
	} = loaderData;
	console.log(loaderData);

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<>
			{/* Project Details Conainer */}
			<div className='project-details-container mb-20'>
				<div className='mx-auto  w-10/12'>
					<div className='mx-auto max-w-2xl lg:max-w-none grid grid-cols-2 gap-8 mt-5'>
						{/* Project Pictures */}
						<div className='order-first lg:order-last col-span-full lg:col-span-1 rounded-sm mt-5  '>
							<Slider {...settings} className=''>
								<div className='h-[10rem] lg:h-[18rem] overflow-auto scroll-auto hover:scroll-smooth '>
									<img src={image1} alt='...' className=' w-full' />
								</div>
								<div className='h-[10rem] lg:h-[18rem] overflow-auto scroll-auto hover:scroll-smooth '>
									<img src={image2} alt='...' className=' w-full' />
								</div>
								<div className='h-[10rem] lg:h-[18rem] overflow-auto scroll-auto hover:scroll-smooth '>
									<img src={image3} alt='...' className=' w-full' />
								</div>
								<div className='h-[10rem] lg:h-[18rem] overflow-auto scroll-auto hover:scroll-smooth '>
									<img src={image4} alt='...' className=' w-full' />
								</div>
								<div className='h-[10rem] lg:h-[18rem] overflow-auto scroll-auto hover:scroll-smooth '>
									<img src={image5} alt='...' className=' w-full' />
								</div>
								<div className='h-[10rem] lg:h-[18rem] overflow-auto scroll-auto hover:scroll-smooth '>
									<img src={image6} alt='...' className=' w-full' />
								</div>
							</Slider>
							<div className='card-actions justify-center mt-10'>
								<div className='flex items-center justify-around pb-5'>
									<a
										href={liveLink}
										target='_blank'
										className=' btn glass btn-xs lg:btn-sm  hover:bg-gray-900 bg-slate-900 text-white '
										rel='noreferrer'
									>
										Live site
									</a>
									<a
										href={clientCode}
										target='_blank'
										className=' btn glass btn-xs lg:btn-sm mx-4 hover:bg-gray-900 bg-slate-900 text-white '
										rel='noreferrer'
									>
										Client
									</a>
									<a
										href={serverCode}
										target='_blank'
										className=' btn glass btn-xs lg:btn-sm  hover:bg-gray-900 bg-slate-900 text-white '
										rel='noreferrer'
									>
										Server
									</a>
								</div>
							</div>
						</div>

						{/* :Project DETAILS */}
						<div className='order-last lg:order-first col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start'>
							{/* ::Name */}
							<h1 className='text-2xl md:text-5xl text-white  font-extrabold tracking-wide mb-5'>
								{projectName}
							</h1>
							<div className=''>
								{/* ::Description */}
								<h1 className='text-2xl font-bold text-gray-400 italic underline mb-5'>
									Project Description:
								</h1>
								<ul className='list-disc mb-5 text-gray-300 font-medium break-words px-4'>
									{description.map((desc, index) => (
										<li key={index} className='mb-1'>
											{desc}
										</li>
									))}
								</ul>
								<hr />
								{/* Tools */}
								<p className='text-base tracking-wider text-blue-500 flex flex-wrap my-5 '>
									<span className='text-white font-bold underline underline-offset-2'>
										Tools:
									</span>
									&nbsp;
									{tools.map((tool, index) => (
										<span key={index}>{tool}, </span>
									))}
								</p>
								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectDetails;
