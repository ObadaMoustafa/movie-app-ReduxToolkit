import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorMsg from "../../common/Error/ErrorMsg";
import Spinner from "../../common/spinner/Spinner";
import useFetch from "../../hooks/useFetch";
import {
  deleteSelectedMovie,
  getSelectedMovie,
  selectAMovie,
} from "../../movieStore/movies/movieSlice";
import {
  deleteSelectedSeries,
  getSelectedSeries,
  selectASeries,
} from "../../movieStore/series/seriesSlice";
import "./movieDetail.css";

function MovieDetail() {
  const { imdbId } = useParams();
  const apiKey = process.env.REACT_APP_APIKEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const fullLink = `${baseUrl}?apikey=${apiKey}&i=${imdbId}&plot=full`;
  const selectedMovie = useSelector(getSelectedMovie);
  const selectedSeries = useSelector(getSelectedSeries);

  const dispatch = useDispatch();

  const { isLoading, error, performFetch } = useFetch(fullLink);

  useEffect(() => {
    performFetch().then(data => {
      if (data.Type === "movie") dispatch(selectAMovie(data));
      if (data.Type === "series") dispatch(selectASeries(data));
    });
    return () => {
      dispatch(deleteSelectedMovie());
      dispatch(deleteSelectedSeries());
    };
  }, []);
  useEffect(() => {
    console.log("selectedMovie", selectedMovie);
    console.log("selectedSeries", selectedSeries);
  }, [selectedMovie, selectedSeries]);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorMsg text={error} />}
      {selectedMovie && (
        <div className="movie-details page-content">
          <div className="movie-title">
            <h1>{selectedMovie.Title}</h1>
            <h2>
              {selectedMovie.Year} - {selectedMovie.Genre}
            </h2>
          </div>
          <div className="poster">
            <div>{selectedMovie.imdbRating}</div>
            <img src={selectedMovie.Poster} alt="Movie poster" />
          </div>
          <div className="init-info">
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
        </div>
      )}
      {selectedSeries && (
        <div className="movie-details page-content">
          <div className="movie-title">
            <h1>{selectedSeries.Title}</h1>
            <h2>
              {selectedSeries.Year} - {selectedSeries.Genre}
            </h2>
          </div>
          <div className="poster">
            <div>{selectedSeries.imdbRating}</div>
            <img src={selectedSeries.Poster} alt="Movie poster" />
          </div>
          <div className="init-info">
            <h3>
              <span>Summery: </span>
              {selectedSeries.Plot}
            </h3>
            <h3>
              <span>Type: </span>
              {selectedSeries.Type}
            </h3>
            <h3>
              <span>Duration: </span>
              {selectedSeries.Runtime}
            </h3>

            <h3>
              <span>Country: </span>
              {selectedSeries.Country}
            </h3>
            <h3>
              <span>Language: </span>
              {selectedSeries.Language}
            </h3>
            <h3>
              <span>Actors: </span>
              {selectedSeries.Actors}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
