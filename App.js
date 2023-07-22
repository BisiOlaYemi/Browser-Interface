import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaSyncAlt, FaDownload } from 'react-icons/fa';
import SearchBar from './components/SearchBar';

const App = () => {
  const [isNewTabOpen, setIsNewTabOpen] = useState(false);
  const [newTabInput, setNewTabInput] = useState('');

  const handleSearch = (query) => {
    // Here you can implement the search functionality, e.g., send the query to an API
    console.log('Search query:', query);
  };

  const handleNewTabClick = () => {
    setIsNewTabOpen(true);
  };

  const handleNewTabInputChange = (event) => {
    setNewTabInput(event.target.value);
  };

  // eslint-disable-next-line
  const handleNewTabSubmit = () => {
    // Perform any action you want with the new tab input value here
    // For example, you could open the new tab or load the website
    console.log('New tab input:', newTabInput);

    // Reset the input and close the new tab
    setIsNewTabOpen(false);
    setNewTabInput('');
  };

  return (
    <div className="container mx-auto max-w-full">
      <div className="bg-gray-800 text-white flex items-center space-x-2">
        {/* Left Arrow */}
        <FaArrowLeft />
        {/* Right Arrow */}
        <FaArrowRight />
        {/* Refresh */}
        <FaSyncAlt />
        <div className="flex items-center justify-center flex-1">
          <input
            type="text"
            className="md:w-2/4 bg-transparent border border-gray-800 rounded-md p-1"
            placeholder="Enter a URL..."
            value={newTabInput}
            onChange={handleNewTabInputChange}
          />
        </div>
        {/* Download */}
        <FaDownload />
        {/* You can add more icons here */}
        <button
          className="ml-auto bg-gray-600 p-2 rounded-md"
          onClick={handleNewTabClick}
        >
          +
        </button>
      </div>

      {isNewTabOpen && (
        <div className="text-white">
          <input
            type="text"
            className="md:w-2/4 bg-transparent border border-gray-800 rounded-md p-1 flex items-center justify-center"
            placeholder="Enter a URL..."
            value={newTabInput}
            onChange={handleNewTabInputChange}
          />
        </div>
      )}

      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
