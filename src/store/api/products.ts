import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TGetProducts, TProduct } from "../../types/store/api/products.type";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getAll: builder.query<TProduct[], TGetProducts>({
      query: (params?: TGetProducts) => ({
        url: "/product",
        params,
      }),
    }),
  }),
});

export const { useGetAllQuery } = productsApi;
