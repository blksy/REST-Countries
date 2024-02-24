import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (s) => {
    s.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a country..."
        value={input}
        onChange={(s) => {
          setInput(s.target.value);
        }}
      />
    </form>
  );
};

export default SearchInput;
