import { Link } from "react-router-dom";
import {
	calculateReadingTime,
	createNewsApiSearchQuery,
	formatDate,
	trimDescription,
	trimTitle,
} from "../../util/helpers";

export default function Gallery({ searchResults }) {
	return (
		<div className="mt-2 p-8 max-w-6xl">
			{searchResults?.map((item, index) => {
				const query = createNewsApiSearchQuery(item)
				return (
				<div key={index} className="grid grid-cols-3 gap-4 p-2 mb-5">
					<Link to={`/news?query=${query}`} className="">
						<img className="aspect-video w-full" src={item?.urlToImage} alt={item.title} />
					</Link>
					<div className="col-span-2">
						<Link to={`/news?query=${query}`} className="block">
							<h3 className=" text-[18px] font-bold">
								{trimTitle(item?.title, 140)}
							</h3>
						</Link>
						<div className="flex gap-2 text-xs my-2 tracking-wide">
							<p>{formatDate(item?.publishedAt)}</p>
							<span>&#x2022;</span>
							<p>
								{calculateReadingTime(
									item?.content.split(/\s+/).length
								)}
							</p>
						</div>

						<Link to={`/news?query=${query}`}>
							<p>{trimDescription(item?.description, 180)}</p>
						</Link>
					</div>
				</div>
			)})}
		</div>
	);
}
