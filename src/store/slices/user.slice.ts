import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../types/store/slices/user.type";

const initialState: TUser = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { setUser } = userSlice.actions;
