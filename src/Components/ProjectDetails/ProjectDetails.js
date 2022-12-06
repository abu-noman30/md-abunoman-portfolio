import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

const ProjectDetails = () => {
	const loaderData = useLoaderData();
	console.log(loaderData);
	const location = useLocation();
	const pathname = location.pathname;
	const id = pathname.split('/')[2];
	console.log(id);
	// const [project, setProject] = useState([]);

	// const projectObj = loaderData.find((proj) => proj.id === id);
	// // console.log(project);
	// setProject(projectObj);

	return (
		<>
			{/* Project Details */}
			<div className='project-details-container w-full md:w-10/12 mx-auto'>
				<section className='text-white '>
					<div className='container px-6 py-10 mx-auto'>
						<h1 className='text-3xl font-semibold text-center capitalize lg:text-4xl '>
							Project Details
						</h1>
						<div className='grid grid-cols-1 md:grid-cols-2  gap-8 mt-8 xl:mt-12 xl:gap-12 '>
							<div className='col-span-2 md:col-span-1'>
								<div className='project-details-img'>
									<img src='' alt='project' />
								</div>
							</div>
							<div className='col-span-2 md:col-span-1'>
								<div className='project-details-content'>
									<h1 className='text-2xl font-semibold text-center capitalize lg:text-3xl '>
										Project Name
									</h1>
									<p className='text-center mt-4'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
										quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
										Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
										quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
										Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
										quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
										Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
										quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
										Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
										quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
										Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
										quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
										Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
										quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
										Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
										quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
										Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
										quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
										Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
										quod. Quisquam, quod.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ProjectDetails;
