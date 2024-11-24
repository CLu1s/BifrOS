import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { WallpaperSlice } from "./wallpaperSlice";

export const selectScrapper = (state: RootState): WallpaperSlice =>
  state.wallpaper;

export const selectLoadingState = createSelector(
  selectScrapper,
  (wallpaper) => wallpaper.loadingState,
);

export const selectConfig = createSelector(
  selectScrapper,
  (wallpaper) => wallpaper.config,
);

export const selectCollectionsInfo = createSelector(
  selectScrapper,
  (wallpaper) => wallpaper.collectionsInfo,
);

export const selectActiveCollection = createSelector(
  selectScrapper,
  (wallpaper) => wallpaper.activeCollection,
);

export const portraitQueue = createSelector(selectScrapper, (wallpaper) =>
  wallpaper.queue.portrait.toSorted((a, b) => a.order - b.order),
);

export const landscapeQueue = createSelector(selectScrapper, (wallpaper) =>
  wallpaper.queue.landscape.toSorted((a, b) => a.order - b.order),
);

export const selectModalImage = createSelector(
  selectScrapper,
  (wallpaper) => wallpaper.modalImage,
);

export const selectIsModalOpen = createSelector(
  selectScrapper,
  (wallpaper) => wallpaper.isModalOpen,
);
