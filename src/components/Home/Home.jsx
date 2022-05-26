import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ErrorMsg from "../../common/Error/ErrorMsg";
import { addMovies } from "../../movieStore/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";
import "./home.css";

function Home() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = process.env.REACT_APP_APIKEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const dispatch = useDispatch();

  async function searchMovies() {
    setIsLoading(true);
    setErrorMsg(null);
    const response = await axios
      .get(`${baseUrl}?apikey=${apiKey}&s=spider`)
      .catch(err => console.log(err));
    if (!response.data.Error) {
      setIsLoading(false);
      dispatch(addMovies(response.data.Search));
    } else {
      setIsLoading(false);
      setErrorMsg(response.data.Error);
      console.error("Error", response.data.Error);
    }
  }

  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <div className="page-content">
      <p className="text-font-primary">Home page</p>
      {isLoading && <p className="text-3xl text-font-primary">Loading ...</p>}
      {errorMsg && <ErrorMsg text={errorMsg} />}
      {!isLoading && !errorMsg && <MovieListing />}
    </div>
  );
}

export default Home;
