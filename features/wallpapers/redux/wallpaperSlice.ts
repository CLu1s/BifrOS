import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CollectionInfo,
  CollectionResponse,
  HistoryElement,
  Image,
  Meta,
  QueueElement,
  Settings,
} from "@/features/wallpapers/types";

interface Pages {
  [key: string]: Image[][];
}

interface Metadatas {
  [key: string]: Meta;
}

export type WallpaperSlice = {
  config: Settings;
  collectionsInfo: CollectionInfo[];
  activeCollection: CollectionInfo | null;
  queue: { portrait: QueueElement[]; landscape: QueueElement[] };
  isModalOpen: boolean;
  modalImage: string;
  history: HistoryElement[];
  pages: Pages;
  metadata: Metadatas;
};

const initialState: WallpaperSlice = {
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
  modalImage: "",
  history: [],
  pages: {},
  metadata: {
    default: {
      total: 0,
      current_page: 1,
      last_page: 0,
      per_page: "",
      query: null,
      seed: null,
    },
  },
};

const wallpaperSlice = createSlice({
  name: "scrapper",
  initialState,
  reducers: {
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
    openModal: (state, action: PayloadAction<string>) => {
      console.log("open modal", action.payload);
      state.isModalOpen = true;
      state.modalImage = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalImage = "";
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    addPage: (
      state,
      action: PayloadAction<{ collectionId: string; page: CollectionResponse }>,
    ) => {
      const { collectionId, page } = action.payload;
      if (page.meta.current_page === state.metadata[collectionId]?.current_page)
        return;
      if (state.pages[collectionId]) {
        state.pages[collectionId].push(page.data);
      } else {
        state.pages[collectionId] = [page.data];
      }
      state.metadata[collectionId] = page.meta;
    },
    addMetadata: (
      state,
      action: PayloadAction<{ collectionId: string; metadata: Meta }>,
    ) => {
      const { collectionId, metadata } = action.payload;
      state.metadata[collectionId] = metadata;
    },
  },
});

export const {
  setConfig,
  setActiveCollection,
  setCollectionsInfo,
  setQueue,
  addToQueue,
  removeFromQueue,
  openModal,
  closeModal,
  setHistory,
  addPage,
  addMetadata,
} = wallpaperSlice.actions;
export const wallpaperReducer = wallpaperSlice.reducer;
export default wallpaperSlice;
