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
			<div className='projects-container w-full md:w-10/12 mx-auto'>
				<section className='text-white '>
					<div className='container px-6 py-10 mx-auto'>
						<h1 className='text-3xl font-semibold text-center capitalize lg:text-4xl '>
							Our Portfolio
						</h1>

						<div className='grid grid-cols-1 md:grid-cols-2  gap-8 mt-8 xl:mt-12 xl:gap-12 '>
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
