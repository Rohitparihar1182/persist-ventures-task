import { useGetEverythingQuery } from "../../state/news/apiSlice";
import Gallery from "./componenets/gallery";

export default function NewsGallery() {
	const {
		data: news,
		isError,
		isSuccess,
		error,
		isLoading,
	} = useGetEverythingQuery("en");

	const content = isLoading ? (
		<div>Loading... </div>
	) : isError ? (
		<div>{error.message}</div>
	) : (
		<Gallery data={news?.articles} />
	);

	return <div>{content}</div>;
}


