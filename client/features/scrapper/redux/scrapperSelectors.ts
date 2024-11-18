import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { ScrapperState } from "./scrapperSlice";

export const selectScrapper = (state: RootState): ScrapperState =>
  state.scrapper;

export const selectLoadingState = createSelector(
  selectScrapper,
  (scrapper) => scrapper.loadingState,
);

export const selectExecutions = createSelector(
  selectScrapper,
  (scrapper) => scrapper.executions,
);
