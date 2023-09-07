import { TRootState } from "../types/store/hooks";

export const filterSelector = (state: TRootState) => {
  return state.filterSlice;
};
