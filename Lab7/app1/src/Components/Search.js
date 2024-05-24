import React, { useState } from "react";

const Search = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="search"
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleOnChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;