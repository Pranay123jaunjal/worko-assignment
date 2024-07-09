import React, { useState } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
    // Implement search logic
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="btn btn-primary mt-2">Search</button>
    </div>
  );
}

export default SearchComponent;
