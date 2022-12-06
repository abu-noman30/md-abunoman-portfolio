import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';

function App() {
	return (
		<div className='App bg-gray-200 bg-[url(https://t3.ftcdn.net/jpg/04/39/59/32/360_F_439593202_3ZYjuJk9ukG0zzWnNEaUxZKXF01Z0zWu.jpg)] bg-no-repeat bg-scroll bg-center bg-cover w-full text-white'>
			<Toaster position='top-center' reverseOrder={true} />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
