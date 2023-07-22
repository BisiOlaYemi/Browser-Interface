// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <input
        type="text"
        className="border border-gray-600 rounded-md p-2 mr-2 px-24 mt-56"
        placeholder="Search with Yemi..."
        value={query}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 mt-56"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
