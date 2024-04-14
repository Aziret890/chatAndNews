import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface INewsItem {
  title: string;
  info: string;
  id: number;
  date: string;
  image: string;
  // comments: string;
}

type TypeInitialState = {
  news: INewsItem[];
};

const initialState: TypeInitialState = {
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, { payload }: PayloadAction<INewsItem[]>) => {
      state.news = payload;
    },
  },
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;