import { configureStore } from "@reduxjs/toolkit";
import allMoviesReducer from "./movies/movieSlice";

export const store = configureStore({
  reducer: {
    movieStore: allMoviesReducer,
    seriosList: {},
  },
});
