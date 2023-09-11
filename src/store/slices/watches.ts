import { createSlice } from "@reduxjs/toolkit";
import { TWatch } from "../../types/store/api/watches";

export const watchesSlice = createSlice({
  name: "watchesSlice",
  initialState: [] as TWatch["watches"],
  reducers: {
    setWatches: (state, action) => action.payload,
  },
});

export const { setWatches } = watchesSlice.actions;
