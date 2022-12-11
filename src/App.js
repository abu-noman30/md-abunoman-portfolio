import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import router from './Router/Router';

function App() {
	return (
		<div className='App bg-gray-200 bg-[url(https://i.ibb.co/PY4tY6r/background.jpg)] bg-no-repeat bg-scroll bg-center bg-cover w-full text-white'>
			<Toaster position='top-center' reverseOrder={true} />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
