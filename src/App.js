import React from 'react';
import useJsonFetch from './useJsonFetch';
import './App.css';
import Data from './Data';
import Error from './Error';
import Load from './Load';

function App() {
  return (
    <div className="App">
      <Data/>
      <Error/>
      <Load/>
    </div>
  );
}

export default App;