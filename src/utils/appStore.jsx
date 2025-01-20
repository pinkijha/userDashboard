// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../utils/reduxSlice";
import themeReducer from "../utils/reduxSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer, // Add theme reducer
  },
});
