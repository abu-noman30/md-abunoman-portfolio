import React, { useEffect, useState } from 'react';
import SingleProject from '../../Components/SingleProject/SingleProject';

const Project = () => {
	const [projectsData, setProjectsData] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const res = await fetch('Projects.json');
			const data = await res.json();
			// console.log(data);
			setProjectsData(data);
		};
		fetchAPI();
	}, []);
	return (
		<>
			{/* Projects Container */}
			<div className='projects-container w-full md:w-10/12 mx-auto -mt-10'>
				<section className='text-white '>
					<div className='container px-6 py-10 mx-auto'>
						<div className='flex flex-col items-center justify-center space-y-3 mb-10'>
							<h1 className='text-3xl font-semibold text-white capitalize lg:text-4xl text-center drop-shadow-lg shadow-white'>
								PROJECTS
							</h1>
							<progress className='progress w-60 text-blue-500'></progress>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{projectsData.map((project) => (
								<SingleProject key={project.id} project={project} />
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Project;
