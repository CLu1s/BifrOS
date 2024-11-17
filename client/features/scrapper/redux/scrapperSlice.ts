import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ScrapperState = {
  loading: boolean;
};

const initialState: ScrapperState = {
  loading: false,
};

const scrapperSlice = createSlice({
  name: "scrapper",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = scrapperSlice.actions;
export const scrapperReducer = scrapperSlice.reducer;
export default scrapperSlice;
