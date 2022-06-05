import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorMsg from "../../common/Error/ErrorMsg";
import useFetch from "../../hooks/useFetch";
import {
  deleteSelectedMovie,
  getSelectedMovie,
  selectAMovie,
} from "../../movieStore/movies/movieSlice";
import "./movieDetail.css";

function MovieDetail() {
  const { imdbId } = useParams();
  const apiKey = process.env.REACT_APP_APIKEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const fullLink = `${baseUrl}?apikey=${apiKey}&i=${imdbId}`;
  const selectedMovie = useSelector(getSelectedMovie);

  const dispatch = useDispatch();

  const { isLoading, error, performFetch } = useFetch(fullLink);

  useEffect(() => {
    performFetch().then(data => dispatch(selectAMovie(data)));
    return () => dispatch(deleteSelectedMovie());
  }, []);
  useEffect(() => {
    console.log(selectedMovie);
  }, [selectedMovie]);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <ErrorMsg text={error} />}
      {selectedMovie && (
        <div className="movie-details page-content">
          <h1>{selectedMovie.Title}</h1>
          <h2>
            {selectedMovie.Year} - {selectedMovie.Genre}
          </h2>
          <div className="poster">
            <div>{selectedMovie.imdbRating}</div>
            <img src={selectedMovie.Poster} alt="Movie poster" />
          </div>
          <h3>
            <span>Summery: </span>
            {selectedMovie.Plot}
          </h3>
          <h3>
            <span>Type: </span>
            {selectedMovie.Type}
          </h3>
          <h3>
            <span>Duration: </span>
            {selectedMovie.Runtime}
          </h3>
          <h3>
            <span>Country: </span>
            {selectedMovie.Country}
          </h3>
          <h3>
            <span>Language: </span>
            {selectedMovie.Language}
          </h3>
          <h3>
            <span>Actors: </span>
            {selectedMovie.Actors}
          </h3>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
