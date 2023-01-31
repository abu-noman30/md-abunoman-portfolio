import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root/Root';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import ProjectDetails from '../Pages/ProjectDetails/ProjectDetails';

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
				path: 'projects/:id',
				element: <ProjectDetails />,
				loader: async ({ params }) => {
					return await fetch(`http://localhost:5000/projects/${params.id}`);
				}
			},
			{
				path: 'blog',
				element: <Blog />
			}
		]
	}
]);

export default router;
