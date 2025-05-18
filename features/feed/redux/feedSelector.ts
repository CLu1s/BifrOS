import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { FeedState } from "./feedSlice";
import { isBefore } from "date-fns";

export const selectScrapper = (state: RootState): FeedState => state.feed;

export const selectLoadingState = createSelector(
  selectScrapper,
  (scrapper) => scrapper.loadingState,
);

export const selectFeeds = createSelector(selectScrapper, (scrapper) => {
  const copy = [...scrapper.feeds];
  return copy.sort((a, b) => {
    return isBefore(new Date(a.pubDate), new Date(b.pubDate)) ? 1 : -1;
  });
});

export const selectActiveArticle = createSelector(
  selectScrapper,
  (scrapper) => scrapper.activeArticle,
);
