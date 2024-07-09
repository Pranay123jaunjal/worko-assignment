import React from 'react';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';

function Index() {
  return (
    <div className="container">
      <h1>Welcome to Worko</h1>
      <SearchComponent />
      <Link to="/login" className="btn btn-primary">Login</Link>
    </div>
  );
}

export default Index;
