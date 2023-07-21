import React, { useState } from 'react';
import './../App.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="form mt-5  " onSubmit={handleSubmit}>
      <button type="submit">
        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"
          aria-labelledby="search">
          <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor" strokeWidth="1.333" strokeLinecap="round"
            strokeLinejoin="round"></path>
        </svg>
      </button>
      <input
        className="input"
        placeholder="Search Any Movie..."
        value={query}
        onChange={handleSearch}
        required=""
        type="text"
      />
    </form>
  );
};

export default SearchBar;
