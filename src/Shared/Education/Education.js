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
			<div className='education-container w-10/12 mx-auto mb-10'>
				<div className=''>
					<h1>Education</h1>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
