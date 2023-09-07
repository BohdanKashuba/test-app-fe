import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TUseSelector } from "../types/store/hooks";

export const useAppDispatch: TAppDispatch = useDispatch;
export const useAppSelector: TUseSelector = useSelector;
