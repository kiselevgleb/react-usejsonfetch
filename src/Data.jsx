import React from 'react';
import useJsonFetch from './useJsonFetch';

function Data() {
  const [{ data, isLoading, hasError }] = useJsonFetch(
    "http://localhost:7070/data"
  );

  return (
    <div className="App">
      <p>{data}</p>
      {isLoading && <p>Loading...</p>}
      <p>{hasError}</p>
    </div>
  );
}

export default Data;