import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../../../movieStore/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./movieListing.css";

function MovieListing() {
  const movies = useSelector(getAllMovies);

  return (
    <div className="movies-list">
      {movies?.length > 0 &&
        movies.map((movie, index) => <MovieCard key={index} data={movie} />)}
    </div>
  );
}

export default MovieListing;
