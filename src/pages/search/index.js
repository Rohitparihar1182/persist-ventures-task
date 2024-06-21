import { useSearchParams } from "react-router-dom"
import { useGetEverythingQuery } from "../../state/news/apiSlice";
import { createQuery, filterData } from "../../util/helpers";
import Gallery from "../../componenets/searchGallery";

export default function SearchPage(){
    const [searchParams] = useSearchParams();
    const country = searchParams.get("country");
    const category = searchParams.get("category");
    const query = searchParams.get("query");

    const {
        data: searchResults,
        isLoading,
        isError, 
        isSuccess,
        error
    } = useGetEverythingQuery(createQuery({ country, category, query}));

    const content = isLoading ? (
		<div>Loading... </div>
	) : isError ? (
		<div>{error.message}</div>
	) : isSuccess? (
		<Gallery searchResults={filterData(searchResults?.articles)}/>
	) : <div></div>;


    return (
        <div>{content}</div>
    )
}