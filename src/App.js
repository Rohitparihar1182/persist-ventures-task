import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import "./App.css";
import Navbar from "./componenets/navbar";
import SearchPage from "./pages/search";
import ScrollTop from "./componenets/scrollTop";
import Footer from "./componenets/footer";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout><HomePage /></Layout>,
	},
	{
		path: "news",
		element: <Layout><NewsPage /></Layout>,
	},
	{
		path: "search",
		element: <Layout><SearchPage /></Layout>,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<ScrollTop />
			{children}
			<Footer />
		</>
	);
}
