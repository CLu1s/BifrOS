import { configureStore } from "@reduxjs/toolkit";
import { scrapperReducer } from "@/features/scrapper/redux/scrapperSlice";
import { bookmarkReducer } from "@/features/bookmarks/redux/bookmarksSlice";

export const store = configureStore({
  reducer: {
    scrapper: scrapperReducer,
    bookmark: bookmarkReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
