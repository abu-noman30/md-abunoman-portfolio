import { createBrowserRouter } from 'react-router-dom';
import ProjectDetails from '../Components/ProjectDetails/ProjectDetails';
import Root from '../Layouts/Root/Root';
import Home from '../Pages/Home/Home';
import Project from '../Shared/Project/Project';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'all-projects',
				element: <Project />
			}
		]
	}
]);

export default router;
