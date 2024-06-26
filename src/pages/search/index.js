import { useSearchParams } from "react-router-dom"
import { useGetEverythingQuery } from "../../state/news/apiSlice";
import { createQuery, filterData } from "../../util/helpers";
import Gallery from "../../components/searchGallery";
import Loading from "../../components/searchGallery/Loading";

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
		<div>{Array.from({ length: 10 }).map((_, index) => <Loading key={index} />)}</div>
	) : isError ? (
		<div>{error.message}</div>
	) : isSuccess? (
		<Gallery searchResults={filterData(searchResults?.articles)}/>
	) : <div></div>;


    return (
        <div className="mt-16">{content}</div>
    )
}