import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getChartData: builder.query({
      query: (currencyName: string) =>
        `coins/bitcoin/market_chart?vs_currency=${currencyName}&days=30&interval=daily`,
    }),
    getGlobalData: builder.query({
      query: () => "global",
    }),
    getCoinData: builder.query({
      query: (coinId: String) => `coins/${coinId}?`,
    }),
    getCoinChart: builder.query({
      query: (args: { currencyName: string; days: string; coinId: string }) =>
        `coins/${args.coinId}/market_chart?vs_currency=${args.currencyName}&days=${args.days}`,
    }),
    getSearchResults: builder.query({
      query: (inputValue: string) =>
        `https://crypto-app-server.herokuapp.com/coins/${inputValue}`,
    }),
  }),
});

export const {
  useGetChartDataQuery,
  useGetGlobalDataQuery,
  useGetCoinDataQuery,
  useGetCoinChartQuery,
  useGetSearchResultsQuery,
} = apiSlice;
