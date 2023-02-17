import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import ListHeaders from "./components/ListHeaders";
import Search from "./components/Search";

function App() {
  const [movies, setMovies] = useState();
  
  // const [searchMovie, setSearchMovie] = useState('');
  const [randomMovie, setRandomMovie] = useState({});

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=starwars&apikey=91ef3dfe";

    const response = await fetch(url);
    const responseJson = await response.json();


    
    setMovies(responseJson);

    const newRandomMovie =
      responseJson.Search[Math.floor(Math.random() * responseJson.Search.length)];

      
    
    setRandomMovie(newRandomMovie);
    console.log(randomMovie);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <ListHeaders headers="movies" />
      </div>
      <div className="row">
      { movies ? 

      <MovieList movies={movies} poster={randomMovie.Poster} />

      : <p>Loading</p> }
      </div>
      <Search randomMovie={randomMovie} movieRequest={getMovieRequest} />
    </div>
  );
}

export default App;
