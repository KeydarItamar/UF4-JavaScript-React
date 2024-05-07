/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Welcome from './components/pages/Welcome'
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/pages/MovieList";
import AddMovie from "./components/pages/AddMovie";
import { BrowserRouter as Router } from 'react-router-dom';
import IndexMenu from './components/pages/IndexMenu';

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route path="/movies/list" element={<MovieList/>}/>
          <Route path="/movies/add" element= {<AddMovie/>} />
          <Route path="/indexMenu" element= {<IndexMenu/>} />
        </Routes>
      </Router>
  );
}


export default App
