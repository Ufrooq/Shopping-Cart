import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlicer";

export const mystore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
