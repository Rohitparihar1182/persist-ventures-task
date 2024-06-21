import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home';
import NewsPage from "./pages/news";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<HomePage />
		),
	},
	{
		path: "news",
		element: <NewsPage />,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}