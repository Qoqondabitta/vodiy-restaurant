import { createSlice } from "@reduxjs/toolkit";

export const language = createSlice({
  name: "language",
  initialState: { value: "eng" },
  reducers: {
    english: (state, action) => {
      state.value = "eng";
    },
    pol: (state, action) => {
      state.value = "pol";
    },
    russian: (state, action) => {
      state.value = "rus";
    },
    changeLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { english, pol, russian, changeLanguage } = language.actions;

export default language.reducer;
