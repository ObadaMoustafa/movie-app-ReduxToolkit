import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieListing from "../../components/MovieListing/MovieListing";
import { deleteFavList, getFavList } from "../../movieStore/movies/movieSlice";
import "./favList.css";

function FavList() {
  //write code here
  const favList = useSelector(getFavList);
  const dispatch = useDispatch();
  function clearFavList() {
    dispatch(deleteFavList());
  }

  return (
    <div className="page-content">
      <h1 className="text-6xl mb-6">Favorite list</h1>
      <button type="button" onClick={clearFavList} className="mb-6 btn">
        <i className="fa-solid fa-trash-can"></i>Erase Fav list
      </button>
      {favList.length > 0 ? (
        <MovieListing type="favList" />
      ) : (
        <p>You need to add movies to you fav list to see it</p>
      )}
    </div>
  );
}

export default FavList;
