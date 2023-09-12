import { createSlice } from "@reduxjs/toolkit";
import { TWatch } from "../../types/store/api/watches";

export const watchesSlice = createSlice({
  name: "watchesSlice",
  initialState: [] as TWatch["watches"],
  reducers: {
    setWatches: (state, action) => action.payload,
    resetWatches: () => [],
  },
});

export const { setWatches, resetWatches } = watchesSlice.actions;
