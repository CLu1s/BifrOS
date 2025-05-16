import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { ScrapperState } from "./scrapperSlice";
import { isBefore } from "date-fns";

export const selectScrapper = (state: RootState): ScrapperState =>
  state.scrapper;

export const selectLoadingState = createSelector(
  selectScrapper,
  (scrapper) => scrapper.loadingState,
);

export const selectExecutions = createSelector(selectScrapper, (scrapper) => {
  const copy = [...scrapper.executions];
  return copy.sort((a, b) => {
    return isBefore(new Date(a.timestamp), new Date(b.timestamp)) ? 1 : -1;
  });
});
