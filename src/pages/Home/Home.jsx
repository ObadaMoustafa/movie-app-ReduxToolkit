import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, getAllMovies } from "../../movieStore/movies/movieSlice";
import ErrorMsg from "../../common/Error/ErrorMsg";
import SearchBar from "./components/SearchBar/SearchBar";
import Spinner from "../../common/spinner/Spinner";
import useFetch from "../../hooks/useFetch";
import MovieListing from "../../components/MovieListing/MovieListing";
import "./home.css";

function Home() {
  // this state allow me to select between movie and series after refreshing the page
  // because the search is
  const [searchTerm, setSearchTerm] = useState(
    () => localStorage.getItem("search-term") || ""
  );

  const [searchType, setSearchType] = useState("movie");

  const moviesList = useSelector(getAllMovies);

  const apiKey = process.env.REACT_APP_APIKEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const fullLink = `${baseUrl}?apikey=${apiKey}&s=${
    searchTerm || "islam"
  }&type=${searchType}`;
  const { isLoading, error, performFetch } = useFetch(fullLink);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchTerm && moviesList) {
      // do nothing just got the movies list from the store
    } else {
      performFetch().then(data => {
        dispatch(addMovies(data.Search));
      });
    }
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
