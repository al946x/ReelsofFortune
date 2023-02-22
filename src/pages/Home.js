import React from "react";
import {useState, useEffect} from 'react';
// import {FaHeart} from "react-icons/fa";
import RandomMovie from "../components/RandomMovie";
import Search from "../components/Search";




function Home() {
    const [movies, setMovies] = useState();

    // const [searchMovie, setSearchMovie] = useState('');
    const [randomMovie, setRandomMovie] = useState({});

    const getMovieRequest = async () => {
        
        const movieArray = ['movie', 'you', 'about', 'all', 'kill', 'horror', 'night', 'run', 'take', 'drive', 'animal', 'brain', 'mystery', 'dead', 'lost', 'park', 'swim', 'claim', 'plane', 'train', 'space', 'quest', 'fly', 'catch', 'hide', 'pride', 'children', 'kids', 'get', 'out', 'search', 'car', 'spy', 'lake', 'log', 'tree', 'grass', 'home', 'total', 'text', 'phone', 'react', 'island', 'ocean', 'sea', 'find', 'web', 'day', 'hero', 'walk', 'drink', 'galaxy', 'love', 'name', 'murder', 'escape', 'common', 'fatal', 'cat', 'dog', 'clock', 'bird', 'book', 'dream', 'photo', 'online', 'best', 'money', 'heist', 'year', 'date', 'funny', 'comic', 'outside', 'screen', 'water', 'party', 'fast', 'deep', 'race', 'spot', 'spray', 'down', 'up', 'dance'];
        
        const randomSelector = movieArray[Math.floor(Math.random() * movieArray.length)];

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

    // useEffect(() => {
    //     getMovieRequest();
    // }, []);

    return(
        <>
          <Search movieRequest={getMovieRequest} />
            {/* <div className="fav-btn" style={{ textAlign: "center" }}>
                <FaHeart size={25} />
            </div> */}

            {randomMovie && <RandomMovie movies={movies} randomMovie={randomMovie} movieRequest={getMovieRequest} />}
          

        
        </>
    )
}

export default Home;