import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TGetProducts, TProduct } from "../../types/store/api/products.type";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getAll: builder.query<TProduct[], TGetProducts>({
      query: (params?: TGetProducts) => {
        const qs = Object.entries(params ?? {}).reduce((acc, [key, value]) => {
          if (Array.isArray(value)) {
            return [...acc, [key + "[]", value]];
          }

          return [...acc, [key, value]];
        }, [] as any);

        console.log(Object.fromEntries(qs));

        return {
          url: "/product",
          params: Object.fromEntries(qs),
        };
      },
    }),
  }),
});

export const { useGetAllQuery } = productsApi;
