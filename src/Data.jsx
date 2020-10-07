import React from 'react';
import useJsonFetch from './useJsonFetch';

function Data(props) {
  const [data, isLoading, hasError] = useJsonFetch(
    props.url
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