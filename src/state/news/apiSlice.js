import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
	reducerPath: "newsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
	endpoints: (builder) => ({
		getTopHeadlines: builder.query({
			query: ({country, category}) => `top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`,
		}),
		getEverything: builder.query({
			query: (searchQuery) => `everything?q=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}`,
		}),
        searchNews: builder.query({
            query: (searchQuery) => `top-headlines?${searchQuery}apiKey=${process.env.REACT_APP_API_KEY}`
        })
	}),
});

export const { 
    useGetEverythingQuery,
    useGetTopHeadlinesQuery,
    useSearchNewsQuery
} = newsApi