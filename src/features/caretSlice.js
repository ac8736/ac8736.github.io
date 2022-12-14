import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "white",
};

export const caretSlice = createSlice({
  name: "caretSlice",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = caretSlice.actions;
export default caretSlice.reducer;
