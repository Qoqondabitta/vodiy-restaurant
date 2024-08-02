import { createSlice } from "@reduxjs/toolkit";

export const language = createSlice({
    name: "language",
    initialState: { value: "eng" },
    reducers: {
        changeLanguage: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeLanguage } = language.actions

export default language.reducer