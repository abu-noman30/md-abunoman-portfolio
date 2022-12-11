import React, { useEffect, useState } from 'react';
import SingleExperience from '../../Components/SingleExperience/SingleExperience';

const WorkExperience = () => {
	const [experiences, setExperiences] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const res = await fetch('ExperiencesData.json');
			const data = await res.json();
			// console.log(data);
			setExperiences(data);
		};
		fetchAPI();
	}, []);
	return (
		<>
			{/* Work Experiance Container */}
			<div className='work-experiance-container w-10/12 mx-auto mb-10'>
				<div className='flex flex-col items-center justify-center space-y-3'>
					<h1 className='text-3xl font-semibold text-white capitalize lg:text-4xl text-center drop-shadow-lg shadow-white'>
						WORK EXPERIENCE
					</h1>
					<progress className='progress w-60 text-blue-500'></progress>
				</div>
				<div className='my-16'>
					{experiences.map((experience) => (
						<SingleExperience key={experience.id} experience={experience} />
					))}
				</div>
			</div>
		</>
	);
};

export default WorkExperience;
