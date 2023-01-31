import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import background from './Images/background.jpg';

import router from './Router/Router';

function App() {
	return (
		<div
			className='App bg-gray-200 bg-no-repeat bg-scroll bg-center bg-cover w-full text-white'
			style={{
				backgroundImage: `url(${background})`
			}}
		>
			<Toaster position='top-center' reverseOrder={true} />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
