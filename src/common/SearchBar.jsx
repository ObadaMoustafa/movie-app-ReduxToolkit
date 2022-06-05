import React from "react";
import debounce from "lodash/debounce";

function SearchBar({ setValue }) {
  //write code here
  const setNewValue = e => {
    setValue(e.target.value);
  };
  const updateValueAfterTyping = debounce(setNewValue, 500);
  return (
    <div className="text-black mb-5 w-full sm:w-1/2">
      <input
        type="search"
        onChange={updateValueAfterTyping}
        placeholder="Search Movies"
        className="py-2 px-4 w-full rounded-lg"
      />
    </div>
  );
}

export default SearchBar;
