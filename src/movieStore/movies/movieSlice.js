import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
  selectedMovie: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.moviesList = payload;
    },
    selectAMovie: (state, { payload }) => {
      state.selectedMovie = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies, selectAMovie } = movieSlice.actions;

// access states
export const getAllMovies = state => state.allMovies.moviesList;
export const getSelectedMovie = state => state.allMovies.selectedMovie;

export default movieSlice.reducer;
