import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feed } from "@/features/feed/types";

export type FeedState = {
  loadingState: "idle" | "loading" | "success" | "error";
  feeds: Feed[];
  activeArticle?: Feed;
};

const initialState: FeedState = {
  loadingState: "idle",
  feeds: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setLoadingState: (
      state,
      action: PayloadAction<"idle" | "loading" | "success" | "error">,
    ) => {
      state.loadingState = action.payload;
    },
    setFeeds: (state, action: PayloadAction<Feed[]>) => {
      state.feeds = action.payload;
    },
    setActiveArticle: (state, action: PayloadAction<Feed>) => {
      state.activeArticle = action.payload;
    },
  },
});

export const { setLoadingState, setFeeds, setActiveArticle } =
  feedSlice.actions;
export const feedReducer = feedSlice.reducer;
export default feedSlice;
