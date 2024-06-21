import { useSearchParams } from "react-router-dom";
import { useGetEverythingQuery } from "../../state/news/apiSlice";
import Gallery from "./componenets/gallery";
import Loading from "./componenets/loading";

export default function NewsGallery() {
	const [searchParams] = useSearchParams();

	const category = searchParams.get("category") || "business";
	const {
		data: news,
		isError,
		isSuccess,
		error,
	} = useGetEverythingQuery(category);

	const content = isSuccess ? (
		<Gallery data={news?.articles} />
	) : isError ? (
		<div>{error.message}</div>
	) : (
		<Loading />
	);

	return <div>{content}</div>;
}


