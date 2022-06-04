import { configureStore } from "@reduxjs/toolkit";
import allMoviesReducer from "./movies/movieSlice";

export const store = configureStore({
  reducer: {
    allMovies: allMoviesReducer,
    seriosList: {},
  },
});
