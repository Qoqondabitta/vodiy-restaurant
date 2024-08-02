import { configureStore } from "@reduxjs/toolkit";
import { language } from "./language";

export const stores = configureStore({
  reducer: {
    language,
  },
});