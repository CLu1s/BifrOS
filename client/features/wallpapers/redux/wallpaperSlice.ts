import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollectionInfo, Settings } from "@/features/wallpapers/types";

export type WallpaperSlice = {
  loadingState: "idle" | "loading" | "success" | "error";
  config: Settings;
  collectionsInfo: CollectionInfo[];
  activeCollection: CollectionInfo | null;
};

const initialState: WallpaperSlice = {
  loadingState: "idle",
  config: {
    thumb_size: "",
    per_page: "",
    purity: [],
    categories: [],
    ai_art_filter: 0,
    resolutions: [],
    aspect_ratios: [],
    toplist_range: "",
    tag_blacklist: [],
    user_blacklist: [],
  },
  collectionsInfo: [],
  activeCollection: null,
};

const wallpaperSlice = createSlice({
  name: "scrapper",
  initialState,
  reducers: {
    setLoadingState: (
      state,
      action: PayloadAction<"idle" | "loading" | "success" | "error">,
    ) => {
      state.loadingState = action.payload;
    },
    setConfig: (state, action: PayloadAction<Settings>) => {
      state.config = { ...action.payload };
    },
    setCollectionsInfo: (state, action: PayloadAction<CollectionInfo[]>) => {
      const info = action.payload;
      state.collectionsInfo = info;
      if (state.activeCollection === null) {
        state.activeCollection = info[0];
      }
    },
    setActiveCollection: (state, action: PayloadAction<CollectionInfo>) => {
      state.activeCollection = action.payload;
    },
  },
});

export const {
  setLoadingState,
  setConfig,
  setActiveCollection,
  setCollectionsInfo,
} = wallpaperSlice.actions;
export const wallpaperReducer = wallpaperSlice.reducer;
export default wallpaperSlice;
