// SearchBox.js
import React, { useState } from "react";

const SearchBox = ({ initialSearch, onSubmit }) => {
  const [searchInput, setSearchInput] = useState(initialSearch);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchInput);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex my-4">
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search movies"
        className="flex-grow border-2 border-gray-300 p-2 rounded"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
