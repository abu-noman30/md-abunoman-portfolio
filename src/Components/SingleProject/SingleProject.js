import React from 'react';

const SingleProject = (props) => {
	const { project } = props;
	const { projectName, tools, image, liveLink, clientCode, serverCode } =
		project;

	return (
		<>
			{/* Single Project Container */}
			<div className='single-project-container shadow-lg shadow-gray-600 rounded-lg'>
				<div
					className={`flex items-end overflow-auto rounded-lg  h-[29rem] 
          bg-contain bg-no-repeat`}
					style={{
						backgroundImage: `url(${image})`
					}}
				>
					<div className='w-full p-4 overflow-hidden backdrop-blur-3xl bg-white/60 h-[21rem] lg:h-[13rem] '>
						<h2 className='mt-2 mb-3 text-lg md:text-xl lg:text-2xl font-bold text-gray-800 capitalize h-12 lg:h-8 underline underline-offset-2'>
							{projectName}
						</h2>
						<p className='mt-8 lg:mt-0 text-lg tracking-wider text-blue-500 flex flex-wrap mb-10 md:mb-5 h-32 lg:h-12'>
							<span className='text-gray-900 font-bold underline underline-offset-2'>
								Tools:
							</span>
							&nbsp;
							{tools.map((tool) => (
								<span key={tool.id}>{tool},</span>
							))}
						</p>

						<div className='flex items-center'>
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
			</div>
		</>
	);
};

export default SingleProject;
