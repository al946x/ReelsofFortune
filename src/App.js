
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import ListHeaders from "./components/ListHeaders";
import Search from "./components/Search";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=91ef3dfe";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-6 mb-3">
       <ListHeaders headers="movies"/>
       <Search searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App; 
