import React from "react";
import debounce from "lodash/debounce";
import "./searchBar.css";
function SearchBar({ setValue, setType }) {
  //write code here
  const setNewValue = e => {
    setValue(e.target.value);
  };
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
        <button
          type="button"
          className="type-btn"
          onClick={() => setType("movie")}
        >
          Movie
        </button>
        <button
          type="button"
          className="type-btn"
          onClick={() => setType("series")}
        >
          Series
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
