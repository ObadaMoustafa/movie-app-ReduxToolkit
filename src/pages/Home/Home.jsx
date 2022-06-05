import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ErrorMsg from "../../common/Error/ErrorMsg";
import SearchBar from "../../common/SearchBar";
import Spinner from "../../common/spinner/Spinner";
import useFetch from "../../hooks/useFetch";
import { addMovies } from "../../movieStore/movies/movieSlice";
import MovieListing from "./components/MovieListing/MovieListing";
import "./home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const apiKey = process.env.REACT_APP_APIKEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const fullLink = `${baseUrl}?apikey=${apiKey}&s=${
    searchTerm ? searchTerm : "spider"
  }`;
  const { isLoading, error, performFetch } = useFetch(fullLink);

  const dispatch = useDispatch();

  useEffect(() => {
    performFetch().then(data => dispatch(addMovies(data.Search)));
  }, [searchTerm]);
  return (
    <div className="page-content">
      <SearchBar setValue={setSearchTerm} />
      {isLoading && <Spinner />}
      {error && <ErrorMsg text={error} />}
      {!isLoading && !error && <MovieListing />}
    </div>
  );
}

export default Home;
