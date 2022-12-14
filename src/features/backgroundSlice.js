import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "black",
};

export const backgroundSlice = createSlice({
  name: "backgroundSlice",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = backgroundSlice.actions;
export default backgroundSlice.reducer;
