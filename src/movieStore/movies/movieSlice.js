import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
  selectedMovie: null,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.moviesList = payload;
    },
    deleteMovies: state => {
      state.moviesList = [];
    },
    selectAMovie: (state, { payload }) => {
      state.selectedMovie = payload;
    },
    deleteSelectedMovie: state => {
      state.selectedMovie = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies, deleteMovies, selectAMovie, deleteSelectedMovie } =
  movieSlice.actions;

// access states
export const getAllMovies = state => state.movies.moviesList;
export const getSelectedMovie = state => state.movies.selectedMovie;

export default movieSlice.reducer;
