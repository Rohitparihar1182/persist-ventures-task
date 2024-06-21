import { format, parseISO } from "date-fns";

export function createNewsApiSearchQuery(article) {
	// const queries = [];

	// if (article.source && article.source.id) {
	// 	queries.push(`source:${article.source.id}`);
	// }

	// if (article.title) {
	// 	queries.push(`"${article.title}"`);
	// }

	// if (article.description) {
	// 	const keywords = article.description.split(/\s+/).slice(0, 3); 
	// 	queries.push(...keywords); 
	// }

	// const searchQuery = queries.join(" OR ");

	// return searchQuery;
	return article.title;
}

export function createQuery({ country, category, query }) {
	let slug = `${query}`;
	if (country) slug += `&country=${country}`;
	if (category) slug += `*category=${category}`;
	return slug;
}

export function filterData(data) {
	const newData = data.filter((item) => {
		if (
			!item["title"] ||
			!item["description"] ||
			!item["content"] ||
			!item["urlToImage"]
		)
			return false;
		return true;
	});
	return newData;
}

export function formatDate(date) {
	const dateObj = parseISO(date);
	const formattedDate = format(dateObj, "MMMM d, yyyy");

	return formattedDate;
}

export function calculateReadingTime(wordCount, wordsPerMinute = 200) {
	const minutes = wordCount / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return `${readTime} minute${readTime > 1 ? "s" : ""} read`;
}

export function trimDescription(text, limit = 100) {
	let newText = text.slice(0, limit);
	newText += text.length > limit ? "..." : "";
	return newText;
}

export function trimTitle(text, limit = 65) {
	let newText = text.slice(0, limit);
	newText += text.length > limit ? "..." : "";
	return newText;
}

export function getPaginationPages(activePage, totalPages) {
	const visiblePages = 5;
	const pages = [];

	if (totalPages <= visiblePages) {
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
	} else {
		const startPage = Math.max(
			1,
			activePage - Math.floor(visiblePages / 2)
		);
		const endPage = Math.min(
			totalPages,
			activePage + Math.floor(visiblePages / 2)
		);

		if (startPage > 1) {
			pages.push(1);
			if (startPage > 2) {
				pages.push("...");
			}
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}

		if (endPage < totalPages) {
			if (endPage < totalPages - 1) {
				pages.push("...");
			}
			pages.push(totalPages);
		}
	}

	return pages;
}
