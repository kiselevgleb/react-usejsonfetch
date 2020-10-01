import React from 'react';
import useJsonFetch from './useJsonFetch';
import './App.css';

function Error() {
  const [{ data, isLoading, hasError }] = useJsonFetch(
    "http://localhost:7070/error"
  );

  return (
    <div className="App">
      <p>{data}</p>
      {isLoading && <p>Loading...</p>}
      <p>{hasError}</p>
    </div>
  );
}

export default Error;