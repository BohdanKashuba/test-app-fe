import { filterSlice } from "./slices/filter.slice";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/products";
import { tagsApi } from "./api/tags";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    filterSlice: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ...[productsApi.middleware, tagsApi.middleware]
    ),
});

export default store;
