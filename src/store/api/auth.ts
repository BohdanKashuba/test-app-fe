import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  TAuthResponse,
  TLogin,
  TSignUp,
} from "../../types/store/api/auth.type";
import { setUser } from "../slices/user.slice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL + "/auth",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<TAuthResponse, TLogin>({
      query: (body) => ({
        url: "/login",
        body,
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setUser({ ...data.user, isAuth: true }));
          localStorage.setItem("access-token", data.accessToken);
        } catch {}
      },
    }),
    signUp: builder.mutation<TAuthResponse, TSignUp>({
      query: (body) => ({
        url: "/sign-up",
        body,
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setUser({ ...data.user, isAuth: true }));
          localStorage.setItem("access-token", data.accessToken);
        } catch {}
      },
    }),
    refresh: builder.query<TAuthResponse, void>({
      query: () => ({
        url: "/refresh",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setUser({ ...data.user, isAuth: true }));
          localStorage.setItem("access-token", data.accessToken);
        } catch {}
      },
    }),
  }),
});

export const { useLoginMutation, useRefreshQuery, useSignUpMutation } = authApi;
