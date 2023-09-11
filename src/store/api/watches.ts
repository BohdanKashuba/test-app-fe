import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TGetWatch, TWatch } from "../../types/store/api/watches";
import { setWatches } from "../slices/watches";

export const watchesApi = createApi({
  reducerPath: "watchesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL + "/watches",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access-token") || "";

      headers.append("Authorization", token);
    },
  }),
  tagTypes: ["WATCHES"],
  endpoints: (builder) => ({
    addWatch: builder.mutation<void, TGetWatch>({
      query: (body) => {
        return {
          url: "/connect",
          body,
          method: "POST",
        };
      },
      invalidatesTags: ["WATCHES"],
    }),
    deleteWatch: builder.mutation<void, TGetWatch>({
      query: (body) => {
        return {
          url: "/disconnect",
          body,
          method: "POST",
        };
      },
      invalidatesTags: ["WATCHES"],
    }),
    getWatches: builder.query<TWatch, string>({
      query: (userId: string) => {
        return {
          url: userId,
          method: "GET",
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;

          dispatch(setWatches(data.data.watches));
        } catch {}
      },
      providesTags: ["WATCHES"],
    }),
  }),
});

export const {
  useAddWatchMutation,
  useGetWatchesQuery,
  useDeleteWatchMutation,
} = watchesApi;
