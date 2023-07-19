import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Perbarui impor
import App from './App';
import MovieDetail from './components/MovieDetail'; // Impor komponen detail film Anda

ReactDOM.render(
  <Router>
    <Routes> {/* Gunakan Routes di sini */}
      <Route path="/" element={<App />} /> {/* Perbarui cara mendefinisikan rute */}
      <Route path="/movies/:id" element={<MovieDetail />} /> {/* Gunakan element untuk mengatur komponen */}
      {/* Rute lain jika Anda memiliki */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
