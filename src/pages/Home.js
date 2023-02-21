import React from "react";
import {useState, useEffect} from 'react';
import RandomMovie from "../components/RandomMovie";
import Search from "../components/Search";


function Home() {
    const [movies, setMovies] = useState();

    // const [searchMovie, setSearchMovie] = useState('');
    const [randomMovie, setRandomMovie] = useState({});

    const getMovieRequest = async () => {
        
        const movieArray = ['movie', 'you', 'about', 'all', 'kill', 'horror', 'night', 'run', 'take', 'drive', 'animal', 'brain', 'mystery', 'dead', 'lost', 'park', 'swim', 'claim', 'plane', 'train', 'space', 'quest', 'fly', 'catch', 'hide', 'pride', 'children', 'kids'];
        
        const randomSelector =
        movieArray[Math.floor(Math.random() * movieArray.length)];

        const url = `http://www.omdbapi.com/?s=${randomSelector}&apikey=91ef3dfe`;

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

    return(
        <>
            <RandomMovie movies={movies} randomMovie={randomMovie} movieRequest={getMovieRequest} />

            <Search movieRequest={getMovieRequest} />
        </>
    )
}

export default Home;