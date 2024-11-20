import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bookmark } from "@/features/bookmarks/types";

export type BookmarkState = {
  loadingState: "idle" | "loading" | "success" | "error";
  bookmarks: Bookmark[];
};

const initialState: BookmarkState = {
  loadingState: "idle",
  bookmarks: [],
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
    removeBookmark: (state, action: PayloadAction<string>) => {
      const items = [...state.bookmarks];
      state.bookmarks = items.filter(
        (bookmark) => bookmark.id !== action.payload,
      );
    },
  },
});

export const { setLoadingState, setBookmarks, removeBookmark, addBookmark } =
  bookmarkSlice.actions;
export const bookmarkReducer = bookmarkSlice.reducer;
export default bookmarkSlice;
