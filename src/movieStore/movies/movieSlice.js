import { createSlice } from "@reduxjs/toolkit";
// localStore has the same structure and it's name is movies
const initialState = {
  moviesList: JSON.parse(localStorage.getItem("movies-list")) || null,
  selectedMovie: null,
  favList: JSON.parse(localStorage.getItem("fav-list")) || [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.moviesList = payload;
      localStorage.setItem("movies-list", JSON.stringify(payload));
    },
    deleteMovies: state => {
      state.moviesList = [];
      localStorage.removeItem("movies-list");
    },
    selectAMovie: (state, { payload }) => {
      state.selectedMovie = payload;
    },
    deleteSelectedMovie: state => {
      state.selectedMovie = null;
    },
    addToFav: (state, { payload }) => {
      state.favList.push(payload);
      localStorage.setItem("fav-list", JSON.stringify(state.favList));
    },
    removeFromFav: (state, { payload }) => {
      const idIndex = state.favList.findIndex(id => id === payload);
      state.favList.splice(idIndex, 1);
      localStorage.setItem("fav-list", JSON.stringify(state.favList));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addMovies,
  deleteMovies,
  selectAMovie,
  deleteSelectedMovie,
  addToFav,
  removeFromFav,
} = movieSlice.actions;

// access states
export const getAllMovies = state => state.movies.moviesList;
export const getSelectedMovie = state => state.movies.selectedMovie;
export const getFavList = state => state.movies.favList;

export default movieSlice.reducer;
