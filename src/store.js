import { configureStore } from "@reduxjs/toolkit";
import terminalLogsSlicerReducer from "./features/terminalLogs/terminalLogsSlice";
import caretSlicerReducer from "./features/caretSlice";
import backgroundSliceReducer from "./features/backgroundSlice";

export const store = configureStore({
  reducer: {
    terminalLogs: terminalLogsSlicerReducer,
    caret: caretSlicerReducer,
    background: backgroundSliceReducer,
  },
});
