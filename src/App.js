import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import "./App.css";
import Navbar from "./components/navbar";
import SearchPage from "./pages/search";
import ScrollTop from "./components/scrollTop";
import Footer from "./components/footer";

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
