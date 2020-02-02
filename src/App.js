import React from 'react';
import './App.css';
import AddRow from './containers/AddRow';
import RowsList from './containers/RowsList';
import Results from './containers/Results';

function App() {
  return (
    <div className="App">
      <AddRow />
      <RowsList />
      <Results />
    </div>
  );
}

export default App;
