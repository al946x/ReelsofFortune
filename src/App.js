
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import ListHeaders from "./components/ListHeaders";
import Search from "./components/Search";

function App() {

  const [movies, setMovies] = useState([]);
  // const [searchMovie, setSearchMovie] = useState('');
  const [randomMovie, setRandomMovie] = useState({});

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=91ef3dfe";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  const getRandomMovie = (array) => {
    const randomMovie = array[Math.floor(Math.random() * array.length)];
    setRandomMovie(randomMovie);
  }

  useEffect(() => {
    getMovieRequest();
    // getRandomMovie();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
       <ListHeaders headers="movies"/>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
      <Search />

    </div>
  );
};

export default App;
