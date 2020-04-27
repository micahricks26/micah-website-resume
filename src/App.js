import React from 'react';
import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <div id="welcomePage" className="row">
        <Title />
      </div>
      <div id="experience" className="row">
        <h1>DoD</h1>
      </div>
    </div>
  );
}

export default App;
