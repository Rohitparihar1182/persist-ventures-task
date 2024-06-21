import { useSearchParams } from "react-router-dom";
import { useGetEverythingQuery } from "../../state/news/apiSlice";
import Gallery from "./componenets/gallery";

export default function NewsGallery() {
	const [searchParams] = useSearchParams();

	const category = searchParams.get("category") || "business";
	const {
		data: news,
		isError,
		isSuccess,
		error,
		isLoading,
	} = useGetEverythingQuery(category);

	const content = isLoading ? (
		<div>Loading... </div>
	) : isError ? (
		<div>{error.message}</div>
	) : (
		<Gallery data={news?.articles} />
	);

	return <div>{content}</div>;
}


