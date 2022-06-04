import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {
  deleteSelectedMovie,
  getSelectedMovie,
  selectAMovie,
} from "../../movieStore/movies/movieSlice";

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
      {selectedMovie && (
        <>
          <h1>{selectedMovie.Title}</h1>
          <div>
            <img src={selectedMovie.Poster} alt="Movie poster" />
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetail;
