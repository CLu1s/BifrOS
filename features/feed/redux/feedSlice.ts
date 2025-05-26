import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FeedState = {
  feedHasMore: boolean;
};

const initialState: FeedState = {
  feedHasMore: true,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setFeedHasMore: (state, action: PayloadAction<boolean>) => {
      state.feedHasMore = action.payload;
    },
  },
});

export const { setFeedHasMore } = feedSlice.actions;
export const feedReducer = feedSlice.reducer;
export default feedSlice;
