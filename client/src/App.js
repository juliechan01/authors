import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/' default />
          <Route element = {<AddAuthor />} path='/authors/new' />
          <Route element ={<EditAuthor />} path='/authors/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
