import { useMemo, useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { getPaginationPages, calculateReadingTime, filterData, formatDate, trimDescription, trimTitle, createNewsApiSearchQuery } from "../../../util/helpers";
import { Link } from "react-router-dom";


const MAX_NEWS_PER_PAGE = 20;

export default function Gallery({ data }) {
	const news = filterData(data);
	const [page, setPage] = useState(0);

	const numberOfPages = useMemo(() => news.length / MAX_NEWS_PER_PAGE, [news]);

    const filteredNews = useMemo(() => {
        let i = MAX_NEWS_PER_PAGE*page; 
        const newFilteredNews = [];
        while(i< news.length && i < MAX_NEWS_PER_PAGE * (page+1)){
            newFilteredNews.push(news[i++]);
        }
        return newFilteredNews;
    }, [news, page])

    const maxPages = useMemo(() => getPaginationPages(page, numberOfPages), [numberOfPages, page]);

    const handlePage = (data) => {
		if(data === "prev") {
			if(page > 0) setPage(page-1);
		}else if(data === "next"){
			if(page < numberOfPages-1) setPage(page+1);
		}else{
			if(Number.isInteger(data)){
				setPage(data-1);
			}
		}
    }

	return (
		<div className="mx-auto px-8 py-16 ">
			<div className="grid grid-cols-1 gap-6 xl:gap-8 md:grid-cols-3 lg:grid-cols-4">
				{filteredNews.map((item) => {
					const query = createNewsApiSearchQuery(item)
					return (
					<div
						className="shadow-lg flex flex-col gap-2 mb-8"
						key={item.url}
					>
						<Link to={`news?query=${query}`} className="block relative w-full pb-[56.25%] rounded-tl-md rounded-tr-md overflow-hidden">
							<img
								className="absolute top-0 left-0 w-full h-full object-cover"
								src={item?.urlToImage}
								alt={item?.title}
							/>
						</Link>
						<div className="mt-3">
							<span className="py-[6px] px-4 bg-white/10 text-xs rounded-[50px] font-semibold">
								{item?.source?.name}
							</span>
						</div>
						<div className="flex gap-2 text-xs mt-3 tracking-wide">
							<p>{formatDate(item?.publishedAt)}</p>
							<span>&#x2022;</span>
							<p>
								{calculateReadingTime(
									item?.content.split(/\s+/).length
								)}
							</p>
						</div>
						<Link to={`news?query=${query}`} className="block mt-3">
							<h3 className=" text-[18px] font-bold">
								{trimTitle(item?.title)}
							</h3>
						</Link>
						<Link to={`news?query=${query}`} className="block">
							<p>{trimDescription(item?.description)}</p>
						</Link>
					</div>
				)})}
			</div>
            {/* pagination */}
            <div className="flex justify-center gap-3">
                <div className="flex justify-center items-center p-4 rounded-full aspect-square border border-white/50 cursor-pointer text-gray-300 hover:border-white hover:text-white transition" onClick={() => handlePage("prev")}>
                    <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
                </div>
                {
                    maxPages.map((pageNo, index) => (
                        <div key={index} className={`flex justify-center items-center p-4 rounded-full aspect-square border  cursor-pointer  transition ${(page+1) === pageNo ? "text-[#fcaa18] border-[#fcaa18]" : "text-gray-300 border-white/50 hover:border-white hover:text-white"}`} onClick={() => handlePage(pageNo)}>
                            <div className="w-6 h-6 flex justify-center items-center font-semibold"><span>{pageNo}</span></div>
                        </div>
                    ))
                }
                <div className="flex justify-center items-center p-4 rounded-full aspect-square border border-white/50 cursor-pointer text-gray-300 hover:border-white hover:text-white transition" onClick={() => handlePage("next")}>
                    <MdOutlineKeyboardArrowRight className="w-6 h-6" />
                </div>
            </div>
		</div>
	);
}