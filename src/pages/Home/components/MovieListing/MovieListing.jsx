import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../../../movieStore/movies/movieSlice";
import { getAllSeries } from "../../../../movieStore/series/seriesSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./movieListing.css";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  // console.log("all movies :", movies);

  return (
    <div className="movies-list">
      {movies?.length > 0 &&
        movies.map((movie, index) => <MovieCard key={index} data={movie} />)}
      {series?.length > 0 &&
        series.map((series, index) => <MovieCard key={index} data={series} />)}
    </div>
  );
}

export default MovieListing;
