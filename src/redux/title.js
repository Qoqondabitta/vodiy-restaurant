import { createSlice } from "@reduxjs/toolkit";

export const title = createSlice({
  name: "title",
  initialState: { value: "main" },
  reducers: {
    bottom: (state, action) => {
      state.value = "main";
    },
    shoe: (state, action) => {
      state.value = "soups";
    },
    top: (state, action) => {
      state.value = "drinks";
    },
    changeTitle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { bottom, shoe, top, changeTitle } = title.actions;

export default title.reducer;
