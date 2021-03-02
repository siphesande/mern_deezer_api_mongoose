import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArtistDetailts from './components/ArtistDetailts';
import ListOfMathcingResults from './components/ListOfMathcingResults';
import MainAppBar from './components/AppBar'
import './App.css';

function App() {
   
  return (
    <div className="App">
      <Router>
        <MainAppBar />
        <div className="container">
          <Route exact path="/" component={ListOfMathcingResults} />
          <Route exact path="/artist/:artist_id" component={ArtistDetailts} />
        </div>
      </Router>
    </div>
  );
}

export default App;
