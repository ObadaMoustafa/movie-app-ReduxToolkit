import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getFavList } from "../../movieStore/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./movieListing.css";

function MovieListing({ type = "movies" }) {
  const movies = useSelector(getAllMovies);
  const favList = useSelector(getFavList);
  const data = type === "movies" ? movies : favList;

  return (
    <div className="movies-list">
      {data?.length > 0 &&
        data.map((movie, index) => <MovieCard key={index} data={movie} />)}
    </div>
  );
}

export default MovieListing;
