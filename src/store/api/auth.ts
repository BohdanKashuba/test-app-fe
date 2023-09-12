import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  TAuthResponse,
  TLogin,
  TSignUp,
} from "../../types/store/api/auth.type";
import { resetUser, setUser } from "../slices/user.slice";
import { resetWatches } from "../slices/watches";

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
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(resetUser());
          dispatch(resetWatches());
          localStorage.removeItem("access-token");
        } catch {}
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRefreshQuery,
  useSignUpMutation,
  useLogoutMutation,
} = authApi;
