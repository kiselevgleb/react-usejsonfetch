import React from 'react';
import './App.css';
import Data from './Data';

function App() {
  return (
    <div className="App">
      <Data url={"http://localhost:7070/data"}/>
      <Data url={"http://localhost:7070/error"}/>
      <Data url={"http://localhost:7070/loading"}/>
    </div>
  );
}

export default App;