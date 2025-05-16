import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { WallpaperSlice } from "./wallpaperSlice";
import { orderQueue } from "@/features/wallpapers/lib";

export const selectWallpaperState = (state: RootState): WallpaperSlice =>
  state.wallpaper;

export const selectLoadingState = createSelector(
  selectWallpaperState,
  (wallpaper) => wallpaper.loadingState,
);

export const selectConfig = createSelector(
  selectWallpaperState,
  (wallpaper) => wallpaper.config,
);

export const selectCollectionsInfo = createSelector(
  selectWallpaperState,
  (wallpaper) => wallpaper.collectionsInfo,
);

export const selectActiveCollection = createSelector(
  selectWallpaperState,
  (wallpaper) => wallpaper.activeCollection,
);

export const portraitQueue = createSelector(selectWallpaperState, (wallpaper) =>
  wallpaper.queue.portrait.toSorted(orderQueue),
);

export const landscapeQueue = createSelector(
  selectWallpaperState,
  (wallpaper) => wallpaper.queue.landscape.toSorted(orderQueue),
);

export const selectModalImage = createSelector(
  selectWallpaperState,
  (wallpaper) => wallpaper.modalImage,
);

export const selectIsModalOpen = createSelector(
  selectWallpaperState,
  (wallpaper) => wallpaper.isModalOpen,
);

export const getHistory = createSelector(
  selectWallpaperState,
  (wallpaper) => wallpaper.history,
);
