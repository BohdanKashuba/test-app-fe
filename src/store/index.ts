import { filterSlice } from "./slices/filter.slice";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/products";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    filterSlice: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
