import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import App from './App';
import MovieDetail from './components/MovieDetail'; 

ReactDOM.render(
  <Router>
    <Routes> 
      <Route path="/" element={<App />} />
      <Route path="/movies/:id" element={<MovieDetail />} /> 

    </Routes>
  </Router>,
  document.getElementById('root')
);
