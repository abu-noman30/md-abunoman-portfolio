import React, { useEffect, useState } from 'react';
import SingleEducation from '../../Components/SingleEducation/SingleEducation';

const Education = () => {
	const [educationData, setEducationData] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const res = await fetch('EducataionData.json');
			const data = await res.json();
			// console.log(data);
			setEducationData(data);
		};
		fetchAPI();
	}, []);
	return (
		<>
			{/* Education Container */}
			<div className='education-container w-10/12 mx-auto my-20'>
				<div className='flex flex-col items-center justify-center space-y-3'>
					<h1 className='text-3xl font-semibold text-white capitalize lg:text-4xl text-center drop-shadow-lg shadow-white'>
						EDUCATION
					</h1>
					<progress className='progress w-60 text-blue-500'></progress>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
					{educationData.map((educationData) => (
						<SingleEducation
							key={educationData.id}
							educationData={educationData}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Education;
