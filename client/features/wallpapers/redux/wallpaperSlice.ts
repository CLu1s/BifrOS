import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CollectionInfo,
  Image,
  QueueElement,
  Settings,
} from "@/features/wallpapers/types";

export type WallpaperSlice = {
  loadingState: "idle" | "loading" | "success" | "error";
  config: Settings;
  collectionsInfo: CollectionInfo[];
  activeCollection: CollectionInfo | null;
  queue: { portrait: QueueElement[]; landscape: QueueElement[] };
  isModalOpen: boolean;
  modalImage: QueueElement | Image | null;
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
  queue: {
    portrait: [],
    landscape: [],
  },
  isModalOpen: false,
  modalImage: null,
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
    setQueue: (
      state,
      action: PayloadAction<{
        portrait: QueueElement[];
        landscape: QueueElement[];
      }>,
    ) => {
      state.queue = { ...action.payload };
    },
    addToQueue: (
      state,
      action: PayloadAction<{
        element: QueueElement;
        type: "portrait" | "landscape";
      }>,
    ) => {
      const copy = [...state.queue[action.payload.type]];
      copy.push(action.payload.element);
      state.queue[action.payload.type] = copy;
    },
    removeFromQueue: (
      state,
      action: PayloadAction<{ id: string; type: "portrait" | "landscape" }>,
    ) => {
      const copy = [...state.queue[action.payload.type]];
      const index = copy.findIndex((el) => el.id === action.payload.id);
      copy.splice(index, 1);
      state.queue[action.payload.type] = copy;
    },
    openModal: (state, action: PayloadAction<QueueElement | Image>) => {
      state.isModalOpen = true;
      state.modalImage = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalImage = null;
    },
  },
});

export const {
  setLoadingState,
  setConfig,
  setActiveCollection,
  setCollectionsInfo,
  setQueue,
  addToQueue,
  removeFromQueue,
  openModal,
  closeModal,
} = wallpaperSlice.actions;
export const wallpaperReducer = wallpaperSlice.reducer;
export default wallpaperSlice;
