import React from "react";
import debounce from "lodash/debounce";

function SearchBar({ setValue }) {
  //write code here
  const setNewValue = e => {
    setValue(e.target.value);
  };
  const updateValueAfterTyping = debounce(setNewValue, 500);
  return (
    <div className="text-black mb-3 w-full sm:w-1/2">
      <input
        type="search"
        onChange={updateValueAfterTyping}
        placeholder="Search Movies"
        className="p-2 w-full rounded-lg"
      />
    </div>
  );
}

export default SearchBar;
