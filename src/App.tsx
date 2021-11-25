import Area from "./components/Area";
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Area Chart</h1>
      <Area width={900} height={580} />
    </div>
  );
}

export default App;
