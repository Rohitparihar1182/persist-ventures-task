import { useSearchParams } from "react-router-dom";
import {
	useGetEverythingQuery,
} from "../../state/news/apiSlice";
import { formatDate } from "../../util/helpers";
import Loading from "./loading";


export default function NewsPage() {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");
	console.log(query);
	const {
		data: searchResult,
		isSuccess,
		isError,
		error,
	} = useGetEverythingQuery(query);

	let content;

	if (isSuccess) {
		if (searchResult.articles.length === 0)
			return <div>Sorry, News Not found...</div>;
		const post = searchResult.articles[0];

		content = (
			<div className=" max-w-5xl mx-auto p-4">
				<img
					src={post.urlToImage}
					alt={post.title}
					className="w-full object-cover aspect-video rounded-md"
				/>
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
					{post.title}
				</h1>
				<div className="text-sm my-4 text-gray-300">
					<span>{post.source.name}</span> |{" "}
					<span>{formatDate(post.publishedAt)}</span>
				</div>
				<p className="mt-4">{post.content}</p>
				<h3 className="text-xl font-semibold mt-4 text-emerald-300">
					The free tier of{" "}
					<a href="https://newsapi.org/" className="underline">
						News Api
					</a>{" "}
					Does not allow to view the full content
				</h3>
				<a className="underline text-amber-500 block mt-5" rel="noopener noreferrer" target="_blank" href={post.url}>
					Click here to view the full article
				</a>
			</div>
		);
	}else if(isError){
		content = (
			<div className="p-6">{error.message}</div>
		)
	}else {
		content = (
			<Loading />
		)
	}
	return <div className="my-16">{content}</div>;
}
