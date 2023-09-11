import { filterSlice } from "./slices/filter.slice";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/products";
import { tagsApi } from "./api/tags";
import { userSlice } from "./slices/user.slice";
import { authApi } from "./api/auth";
import { watchesSlice } from "./slices/watches";
import { watchesApi } from "./api/watches";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [watchesApi.reducerPath]: watchesApi.reducer,
    filterSlice: filterSlice.reducer,
    userSlice: userSlice.reducer,
    watchesSlice: watchesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ...[
        productsApi.middleware,
        tagsApi.middleware,
        authApi.middleware,
        watchesApi.middleware,
      ]
    ),
});

export default store;
