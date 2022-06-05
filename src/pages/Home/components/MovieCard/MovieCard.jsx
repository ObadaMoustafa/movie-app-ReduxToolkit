import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";

function MovieCard({ data }) {
  //write code here

  return (
    <Link
      to={`/movie/${data.imdbID}`}
      target="_blank"
      className="movie-card group"
    >
      <img src={data.Poster} alt="movie poster" />
      <div className="card-details">
        <h3>{data.Title}</h3>
        <h4>{data.Year}</h4>
      </div>
    </Link>
  );
}

export default MovieCard;