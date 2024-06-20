import "./App.css";
import Banner from "./componenets/banner";
import Navbar from "./componenets/navbar";
import NewsGallery from "./componenets/newsGallery";
import ScrollToTop from "./componenets/scrollToTop";

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<HomePage />
		),
	},
	{
		path: "about",
		element: <div>About</div>,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}

function HomePage() {
	return (
		<>
			<Navbar />
			<Banner />
			<NewsGallery />
			<ScrollToTop />
		</>
	);
};
