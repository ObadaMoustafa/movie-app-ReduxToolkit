import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFavList } from "../../movieStore/movies/movieSlice";
import "./movieCard.css";

function MovieCard({ data }) {
  //write code here
  const favList = useSelector(getFavList);
  const isInFav = favList.find(movie => movie.imdbID === data.imdbID);
  const starIconClass = isInFav ? "solid" : "regular";

  return (
    <Link to={`/movie/${data.imdbID}`} className="movie-card group">
      <i className={`fa-${starIconClass} fa-star`}></i>
      <img src={data.Poster} alt="movie poster" />
      <div className="card-details">
        <h3>{data.Title}</h3>
        <h4>{data.Year}</h4>
      </div>
    </Link>
  );
}

export default MovieCard;
