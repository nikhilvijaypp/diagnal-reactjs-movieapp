import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./Movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
