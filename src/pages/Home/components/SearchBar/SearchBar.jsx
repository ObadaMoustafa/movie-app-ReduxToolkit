import React from "react";
import debounce from "lodash/debounce";
import "./searchBar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearStore } from "../../../../movieStore/movies/movieSlice";
function SearchBar({ setValue, setType }) {
  //write code here
  const dispatch = useDispatch();
  const setNewValue = e => {
    setValue(e.target.value);
    localStorage.setItem("search-term", e.target.value);
  };

  function clearHistory() {
    dispatch(clearStore());
    window.location.reload();
  }
  const updateValueAfterTyping = debounce(setNewValue, 500);
  return (
    <div className="search-bar">
      <input
        type="search"
        onChange={updateValueAfterTyping}
        placeholder="Search Movies"
        className="py-2 px-4 w-full rounded-lg"
      />
      <div>
        <button type="button" className="btn" onClick={() => setType("movie")}>
          <i className="fa-solid fa-magnifying-glass"></i>
          Movie
        </button>
        <button type="button" className="btn" onClick={() => setType("series")}>
          <i className="fa-solid fa-magnifying-glass"></i>
          Series
        </button>

        <Link to="/favList" className="btn">
          <i className="fa-regular fa-star mr-2"></i>
          fav List
        </Link>
        <button type="button" className="btn" onClick={clearHistory}>
          <i className="fa-regular fa-trash-can"></i>clear History
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
