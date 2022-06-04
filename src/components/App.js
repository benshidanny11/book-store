import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Books from '../pages/Books';
import Categories from '../pages/Categories';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact="true" path="/" element={<Books />} />

      <Route exact="true" path="/categories" element={<Categories />} />

    </Routes>
  </BrowserRouter>
);

export default App;
