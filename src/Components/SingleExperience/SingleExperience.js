import React from 'react';

const SingleExperience = (props) => {
	const {
		company,
		employmentType,
		companyType,
		location,
		timePeriod,
		skills,
		description,
		image
	} = props.experience;
	return (
		<>
			{/* Single Experience Container */}
			<div className='single-experience-container'>
				<div className='card lg:card-side shadow-md shadow-gray-600 border '>
					<figure className='p-4'>
						<img src={image} alt='Album' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title '>
							<span className='underline underline-offset-4 inline-block w-full'>
								{company} - {employmentType}
							</span>
						</h2>
						<p>
							{companyType} | <span>{location} </span> |{' '}
							<span className=''>{timePeriod}</span>
						</p>

						<p>
							<small>{description}</small>
						</p>
						<p>
							<span className='underline underline-offset-4'>Skills:</span>{' '}
							{skills}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleExperience;
