import { format, parseISO } from "date-fns";
import { useMemo, useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

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

    const maxPages = useMemo(() => getPaginationPages(page, numberOfPages), []);

    const handlePage = (data) => {
		if(data === "prev") {
			if(page > 0) setPage(page-1);
		}else if(data === "next"){
			if(page < numberOfPages) setPage(page+1);
		}else{
			if(Number.isInteger(data)){
				setPage(data-1);
			}
		}
    }

	return (
		<div className="mx-auto px-8 py-16 ">
			<div className="grid grid-cols-1 gap-6 xl:gap-8 md:grid-cols-3 lg:grid-cols-4">
				{filteredNews.map((item) => (
					<div
						className="shadow-lg flex flex-col gap-2 mb-8"
						key={item.url}
					>
						<div className="relative w-full pb-[56.25%] rounded-tl-md rounded-tr-md overflow-hidden">
							<img
								className="absolute top-0 left-0 w-full h-full object-cover"
								src={item?.urlToImage}
								alt={item?.title}
							/>
						</div>
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
						<div className="mt-3">
							<h3 className=" text-[18px] font-bold">
								{item?.title}
							</h3>
						</div>
						<div>
							<p>{trimDescription(item?.description)}</p>
						</div>
					</div>
				))}
			</div>
            {/* pagination */}
            <div className="flex justify-center gap-3">
                <div className="flex justify-center items-center p-4 rounded-full aspect-square border border-white/50 cursor-pointer text-gray-300 hover:border-white hover:text-white transition" onClick={() => handlePage("prev")}>
                    <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
                </div>
                {
                    maxPages.map((pageNo, index) => (
                        <div key={index} className={`flex justify-center items-center p-4 rounded-full aspect-square border border-white/50 cursor-pointer text-gray-300  transition ${page+1 === pageNo ? "text-[#fcaa18] border-[#fcaa18]" : "hover:border-white hover:text-white"}`} onClick={() => handlePage(pageNo)}>
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

function filterData(data) {
	const newData = data.filter((item) => {
		for (let key in item) {
			if (item[key] === null) {
				return false;
			}
		}
		return true;
	});
	return newData;
}

function formatDate(date) {
	const dateObj = parseISO(date);
	const formattedDate = format(dateObj, "MMMM d, yyyy");

	return formattedDate;
}

function calculateReadingTime(wordCount, wordsPerMinute = 200) {
	const minutes = wordCount / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return `${readTime} minute${readTime > 1 ? "s" : ""} read`;
}

function trimDescription(text) {
	return text.slice(0, 100) + "...";
}

function getPaginationPages(activePage, totalPages) {
    const visiblePages = 5; 
    const pages = [];

    if (totalPages <= visiblePages) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        const startPage = Math.max(1, activePage - Math.floor(visiblePages / 2));
        const endPage = Math.min(totalPages, activePage + Math.floor(visiblePages / 2));

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push('...');
            }
            pages.push(totalPages);
        }
    }

    return pages;
}