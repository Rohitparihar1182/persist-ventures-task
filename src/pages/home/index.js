import Banner from "../../componenets/banner";
import Navbar from "../../componenets/navbar";
import NewsGallery from "../../componenets/newsGallery";
import ScrollToTop from "../../componenets/scrollToTop";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<Banner />
			<NewsGallery />
			<ScrollToTop />
		</>
	);
};