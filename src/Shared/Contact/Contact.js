import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import * as FAIcons from 'react-icons/fa';
import * as IMIcons from 'react-icons/im';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_q3tks0h',
				'template_f7mtrgm',
				form.current,
				'AS6LLQrqEbGEvv8fJ'
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success('Message Sent Successfully...!');
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<>
			{/* Contact Container */}
			<div className='contact-container text-white' id='contact-id'>
				<section className='w-10/12 mx-auto '>
					<div className='container py-12 mx-auto'>
						<div className='flex flex-col items-center justify-center space-y-3 mb-8'>
							<h1 className='text-3xl font-semibold text-white capitalize lg:text-4xl text-center drop-shadow-lg shadow-white'>
								FIND ME ON
							</h1>
							<progress className='progress w-60 text-blue-500'></progress>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6'>
							<div className=' col-span-2 md:col-span-1 text-center lg:text-left y-96 my-auto'>
								<div className='mt-6 space-y-8 md:mt-8 flex flex-col items-center md:items-start text-normal md:text-lg '>
									<p className='flex items-start justify-center'>
										<span className='mr-1 text-center'>
											<IMIcons.ImLocation className='text-white' />
										</span>
										<span className=' text-white text-center md:text-center'>
											Mohammadpur, Dhaka-1207, Bangladesh.
										</span>
									</p>

									<p className='flex items-start justify-center '>
										<span className='mr-2'>
											<FAIcons.FaPhoneAlt />
										</span>
										<span className=' text-white'>+8801521309669</span>
									</p>

									<p className='flex items-start justify-center'>
										<a
											href='mailto:md.abunoman1997@gmail.com'
											target='_blank'
											rel='noopener noreferrer'
											className='flex justify-center '
										>
											<span className='mr-2'>
												<FAIcons.FaMailBulk />
											</span>
											<span className=' text-white'>
												md.abunoman1997@gmail.com
											</span>
										</a>
									</p>
								</div>

								<div className='mt-6 w-full md:mt-8 flex justify-center '>
									<div className='flex mt-4 items-center lg:justify-start gap-6 shadow-lg shadow-gray-600 p-3 rounded-full md:mr-auto'>
										<a
											className='mx-1.5  border-2 rounded-full  text-white transition-colors duration-300 transform hover:text-blue-500'
											href='https://www.facebook.com/AbuNoman30/'
											target='_blank'
											rel='noreferrer'
										>
											<svg
												className='w-8 h-8'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z'
													fill='currentColor'
												/>
											</svg>
										</a>

										<a
											className='mx-1.5  border-2 rounded-full  text-white transition-colors duration-300 transform hover:text-blue-500'
											href='https://www.linkedin.com/in/md-abu-noman-994a631b0/'
											target='_blank'
											rel='noreferrer'
										>
											<svg
												className='w-8 h-8'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z'
													fill='currentColor'
												/>
												<path
													d='M7.2 9.6001H4V19.2001H7.2V9.6001Z'
													fill='currentColor'
												/>
												<path
													d='M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z'
													fill='currentColor'
												/>
											</svg>
										</a>

										<a
											className='mx-1.5 border-2 rounded-full p-[0.1rem] text-white transition-colors duration-300 transform hover:text-stone-500'
											href='https://github.com/abu-noman30'
											target='_blank'
											rel='noreferrer'
										>
											<FAIcons.FaGithub className='w-7 h-7' />
										</a>
									</div>
								</div>
							</div>

							<div className='mt-10'>
								<div className='w-full px-8 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl  lg:max-w-xl shadow-gray-300/50'>
									<form
										ref={form}
										onSubmit={(e) => {
											sendEmail(e);
										}}
									>
										<div className='flex-1'>
											<label className='block mb-2 text-sm text-gray-400'>
												Full Name
											</label>
											<input
												type='text'
												name='userName'
												placeholder='John Doe'
												className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
												required
											/>
										</div>

										<div className='flex-1'>
											<label className='block mb-2 text-sm text-gray-400 my-2 '>
												Email address
											</label>
											<input
												type='email'
												name='userEmail'
												placeholder='johndoe@example.com'
												className='block w-full h-[2.5rem] px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
												required
											/>
										</div>

										<div className='w-full mt-6'>
											<label className='block mb-2 text-sm text-gray-400 '>
												Message
											</label>
											<textarea
												name='message'
												className='block w-full h-12 lg:h-20 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
												placeholder='Message'
												required
											></textarea>
										</div>

										<input
											type='submit'
											className='w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 btn glass bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-opacity-50'
											value='Get in touch'
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Contact;
