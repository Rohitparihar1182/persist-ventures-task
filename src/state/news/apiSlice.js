import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
	reducerPath: "newsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
	endpoints: (builder) => ({
		getTopHeadlines: builder.query({
			query: (country) => `top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`,
		}),
		getEverything: builder.query({
			query: (country) => `everything?q=entertainment&apiKey=${process.env.REACT_APP_API_KEY}`,
		}),
        searchNews: builder.query({
            query: (searchQuery) => `everything?q=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}`
        })
	}),
});

export const { 
    useGetEverythingQuery,
    useGetTopHeadlinesQuery,
    useSearchNewsQuery
} = newsApi