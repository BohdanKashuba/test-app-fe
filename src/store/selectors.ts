import { TRootState } from "../types/store/hooks";
import { TUser } from "../types/store/slices/user.type";

export const filterSelector = (state: TRootState) => state.filterSlice;

export const userSelector = (state: TRootState) => state.userSlice as TUser;

export const userIsAuthSelector = (state: TRootState) => state.userSlice.isAuth;
