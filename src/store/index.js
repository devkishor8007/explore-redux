import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./content/ContentSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});
