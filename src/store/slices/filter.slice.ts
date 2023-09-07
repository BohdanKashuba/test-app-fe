import { createSlice } from "@reduxjs/toolkit";
import { TFilterInitialState } from "../../types/store/slices/filter.type";

const initialState: TFilterInitialState = {
  price: {
    start: 0,
  },
};

export const filterSlice = createSlice({
  name: "fitlerSlice",
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilter } = filterSlice.actions;
