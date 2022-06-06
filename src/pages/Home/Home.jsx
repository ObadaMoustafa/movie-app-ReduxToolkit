import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovies, deleteMovies } from "../../movieStore/movies/movieSlice";
import { addSeries, deleteSeries } from "../../movieStore/series/seriesSlice";
import ErrorMsg from "../../common/Error/ErrorMsg";
import SearchBar from "../../common/SearchBar";
import Spinner from "../../common/spinner/Spinner";
import useFetch from "../../hooks/useFetch";
import MovieListing from "./components/MovieListing/MovieListing";
import "./home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("movie");

  const apiKey = process.env.REACT_APP_APIKEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const fullLink = `${baseUrl}?apikey=${apiKey}&s=${
    searchTerm ? searchTerm : "islam"
  }&type=${searchType}`;
  const { isLoading, error, performFetch } = useFetch(fullLink);

  const dispatch = useDispatch();

  useEffect(() => {
    performFetch().then(data => {
      if (searchType === "movie") {
        dispatch(deleteSeries());
        dispatch(addMovies(data.Search));
      }
      if (searchType === "series") {
        dispatch(deleteMovies());
        dispatch(addSeries(data.Search));
      }
    });
  }, [searchTerm, searchType]);

  return (
    <div className="page-content">
      <SearchBar setValue={setSearchTerm} setType={setSearchType} />
      {isLoading && <Spinner />}
      {error && <ErrorMsg text={error} />}
      {!isLoading && !error && <MovieListing />}
    </div>
  );
}

export default Home;
