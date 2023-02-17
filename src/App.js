import {Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import ListHeaders from "./components/ListHeaders";
import Search from "./components/Search";
import Header from "./components/Header";
import Favourites from "./pages/Favourites";
import Contact from "./pages/Contact";
import RandomMovie from "./components/RandomMovie";

function App() {
  const [movies, setMovies] = useState();
  
  // const [searchMovie, setSearchMovie] = useState('');
  const [randomMovie, setRandomMovie] = useState({});

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=starwars&apikey=91ef3dfe";

    const response = await fetch(url);
    const responseJson = await response.json();


    
    setMovies(responseJson);
    console.log(responseJson);

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
        <Header />
        {/* <ListHeaders headers="movies" /> */}
      </div>
      <div className="row">
      <Routes>
        <Route path="/" element={<App />}>
          <RandomMovie movies={movies} randomMovie={randomMovie} movieRequest={getMovieRequest} />
        </Route>

        <Route path="/favourites" element={<Favourites />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      </div>
    </div>
  );
}

export default App;
