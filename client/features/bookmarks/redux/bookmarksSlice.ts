import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Execution } from "@/features/scrapper/types";
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
      state.bookmarks = action.payload;
    },
    addBookmark: (state, action: PayloadAction<Bookmark>) => {
      state.bookmarks.push(action.payload);
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.id !== action.payload,
      );
    },
  },
});

export const { setLoadingState, setBookmarks, removeBookmark, addBookmark } =
  bookmarkSlice.actions;
export const bookmarkReducer = bookmarkSlice.reducer;
export default bookmarkSlice;
