import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ["introduction", "input"],
};

export const terminalLogsSlice = createSlice({
  name: "terminalLogs",
  initialState,
  reducers: {
    addLog: (state, action) => {
      state.value.push(action.payload);
    },
    clearLog: (state) => {
      state.value.length = 0;
    },
  },
});

export const { addLog, clearLog } = terminalLogsSlice.actions;
export default terminalLogsSlice.reducer;
