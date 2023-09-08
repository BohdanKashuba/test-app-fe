import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TTag } from "../../types/store/api/tags.type";

export const tagsApi = createApi({
  reducerPath: "tagsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getAllTags: builder.query<TTag[], void>({
      query: () => ({
        url: "/tags",
      }),
    }),
  }),
});

export const { useGetAllTagsQuery } = tagsApi;
