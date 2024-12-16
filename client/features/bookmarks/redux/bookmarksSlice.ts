import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bookmark, Category } from "@/features/bookmarks/types";

export type BookmarkState = {
  loadingState: "idle" | "loading" | "success" | "error";
  bookmarks: Bookmark[];
  categories: Category[];
  selectedCategory: Category | null;
  filterByTerm: string;
};

const initialState: BookmarkState = {
  loadingState: "idle",
  bookmarks: [],
  categories: [],
  selectedCategory: null,
  filterByTerm: "",
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    setLoadingState: (
      state,
      action: PayloadAction<"idle" | "loading" | "success" | "error">,
    ) => {
      state.loadingState = action.payload;
    },
    setBookmarks: (state, action: PayloadAction<Bookmark[]>) => {
      state.bookmarks = [...action.payload];
    },
    addBookmark: (state, action: PayloadAction<Bookmark>) => {
      const newItem = action.payload;
      state.bookmarks = [...state.bookmarks, newItem];
    },
    updateBookmark: (state, action: PayloadAction<Bookmark>) => {
      const items = [...state.bookmarks];
      const index = items.findIndex(
        (bookmark) => bookmark.id === action.payload.id,
      );
      if (index !== -1) {
        items[index] = action.payload;
        state.bookmarks = items;
      }
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      const items = [...state.bookmarks];
      state.bookmarks = items.filter(
        (bookmark) => bookmark.id !== action.payload,
      );
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      const newItem = action.payload;
      state.categories = [...state.categories, newItem];
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      const items = [...state.categories];
      state.categories = items.filter(
        (category) => category.id !== action.payload,
      );
    },
    setActiveCategory: (state, action: PayloadAction<Category | null>) => {
      state.selectedCategory = action.payload;
    },
    setFilterByTerm: (state, action: PayloadAction<string>) => {
      state.filterByTerm = action.payload;
    },
  },
});

export const {
  setLoadingState,
  updateBookmark,
  setBookmarks,
  removeBookmark,
  addBookmark,
  setCategories,
  addCategory,
  removeCategory,
  setActiveCategory,
  setFilterByTerm,
} = bookmarkSlice.actions;
export const bookmarkReducer = bookmarkSlice.reducer;
export default bookmarkSlice;
