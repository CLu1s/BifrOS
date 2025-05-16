import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Execution } from "@/features/scrapper/types";
import { isBefore } from "date-fns";

export type ScrapperState = {
  loadingState: "idle" | "loading" | "success" | "error";
  executions: Execution[];
};

const initialState: ScrapperState = {
  loadingState: "idle",
  executions: [],
};

const scrapperSlice = createSlice({
  name: "scrapper",
  initialState,
  reducers: {
    setLoadingState: (
      state,
      action: PayloadAction<"idle" | "loading" | "success" | "error">,
    ) => {
      state.loadingState = action.payload;
    },
    setExecutions: (state, action: PayloadAction<Execution[]>) => {
      state.executions = action.payload.sort((a, b) => {
        return isBefore(new Date(a.timestamp), new Date(b.timestamp)) ? 1 : -1;
      });
    },
    addExecution: (state, action: PayloadAction<Execution>) => {
      const copy = [...state.executions];
      copy.unshift(action.payload);
      state.executions = copy.sort((a, b) => {
        return isBefore(new Date(a.timestamp), new Date(b.timestamp)) ? 1 : -1;
      });
    },
  },
});

export const { setLoadingState, setExecutions, addExecution } =
  scrapperSlice.actions;
export const scrapperReducer = scrapperSlice.reducer;
export default scrapperSlice;
