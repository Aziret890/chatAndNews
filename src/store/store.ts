import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import newsSlice from "./slice/news-slice";
import userslice from "./slice/userslice";
import admin from "./slice/admin";
const rootSlice = combineSlices({
  news: newsSlice,
  user: userslice,
  admin,
});

export const store = configureStore({
  reducer: rootSlice,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
