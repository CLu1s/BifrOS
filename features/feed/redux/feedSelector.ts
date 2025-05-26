import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { FeedState } from "./feedSlice";

export const selectScrapper = (state: RootState): FeedState => state.feed;

export const selectFeedHasMore = createSelector(
  selectScrapper,
  (scrapper) => scrapper.feedHasMore,
);
