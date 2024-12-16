import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { BookmarkState } from "./bookmarksSlice";

export const selectScrapper = (state: RootState): BookmarkState =>
  state.bookmark;

export const selectLoadingState = createSelector(
  selectScrapper,
  (bookMarker) => bookMarker.loadingState,
);

export const selectBookmarks = createSelector(
  selectScrapper,
  (bookMarker) => bookMarker.bookmarks,
);

export const selectCategories = createSelector(
  selectScrapper,
  (bookMarker) => bookMarker.categories,
);

export const selectActiveCategory = createSelector(
  selectScrapper,
  (bookMarker) => bookMarker.selectedCategory,
);

export const selectFilterByTerm = createSelector(
  selectScrapper,
  (bookMarker) => bookMarker.filterByTerm,
);
