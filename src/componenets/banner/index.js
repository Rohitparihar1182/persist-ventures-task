import { useGetTopHeadlinesQuery } from "../../state/news/apiSlice";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import required styles
import { Link, useSearchParams } from "react-router-dom";
import {
	createNewsApiSearchQuery,
	filterData,
	trimTitle,
} from "../../util/helpers";
import Loading from "./loading";

export default function Banner() {
	const [searchParams] = useSearchParams();

	const category = searchParams.get("category") || "business";

	const {
		data: topNews,
		isSuccess,
		error,
		isError,
	} = useGetTopHeadlinesQuery({ country: "in", category: category });

	if (isSuccess) {
		const filteredData = filterData(topNews.articles);
		return (
			<Carousel showThumbs={false}>
				{filteredData?.map((data, index) => {
					const query = createNewsApiSearchQuery(data);
					return (
						<div
							key={index}
							className="max-w-full max-h-screen md:aspect-[1.7/1] isolate"
						>
							<div className="absolute inset-0 bg-gradient-to-t from-black to-75% to-black/30"></div>
							<div className="absolute inset-0 -z-10">
								<img
									className="w-full h-full object-cover"
									src={data?.urlToImage}
									alt={data?.title}
								/>
							</div>
							<div className="flex items-end h-full z-10 relative">
								<div className="p-4 pt-52 pb-8 md:pt-0 md:p-8 lg:p-16 text-start max-w-[800px]">
									<div className="text-2xl md:text-4xl lg:text-6xl font-bold">
										<Link
											to={`news?query=${query}`}
											className=""
										>
											{trimTitle(data?.title + "")}
										</Link>
									</div>
									<div className="text-lg mt-6 w-3/4 text-gray-200">
										<Link
											to={`news?query=${query}`}
											className=""
										>
											{trimDescription(
												data?.description + ""
											)}
										</Link>
									</div>
									<div className="mt-6 flex gap-4 capitalize">
										<span className="py-[6px] px-4 bg-white/10 text-xs rounded-[50px] font-semibold">
											{data?.source?.name}
										</span>
										<span>&#x2022;</span>
										<span className="py-[6px] px-4 bg-white/10 text-xs rounded-[50px] font-semibold">
											{category}
										</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		);
	}
	if (isError) {
		return <div>{error.message}</div>;
	}
	return <Carousel showThumbs={false}>
		{
			Array.from({ length: 10 }).map((_, index) => <Loading key={index} />)
		}
	</Carousel>;
}

function trimDescription(text) {
	let newText = text.slice(0, 140);
	if (text.length > 140) newText += "...";
	return newText;
}
