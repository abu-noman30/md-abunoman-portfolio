import React from 'react';
import * as AIIcons from 'react-icons/ai';
import * as FAIcons from 'react-icons/fa';
import * as SIIcons from 'react-icons/si';

const Technologies = () => {
	return (
		<>
			{/* Technologies Container */}
			<div className='technologies-container p-4'>
				<h1>Technologies</h1>
				<ul className='flex flex-wrap gap-5'>
					<li className='flex flex-col items-center justify-center'>
						<AIIcons.AiFillHtml5 className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>HTML</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<FAIcons.FaCss3Alt className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>CSS</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<FAIcons.FaBootstrap className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>Bootstrap</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<SIIcons.SiTailwindcss className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>Tailwind CSS</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<SIIcons.SiJavascript className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>JavaScript</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<FAIcons.FaReact className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>React</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<SIIcons.SiFirebase className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>Firebase</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<FAIcons.FaNodeJs className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>NodeJS</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<SIIcons.SiExpress className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>ExpressjS</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<SIIcons.SiMongodb className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>Mongo DB</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<FAIcons.FaJava className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>JAVA</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<SIIcons.SiCplusplus className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>C++</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<SIIcons.SiMysql className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>MySQL</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<FAIcons.FaGit className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>Git</p>
						</div>
					</li>
					<li className='flex flex-col items-center justify-center'>
						<FAIcons.FaGithub className='w-12 h-12 text-gray-400 hover:text-gray-600' />
						<div>
							<p>Github</p>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Technologies;
