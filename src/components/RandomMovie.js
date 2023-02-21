import React from "react";
import MovieList from "./MovieList";

function RandomMovie(props) {
    const movies = props.movies;

    return (
        <>
        {movies ? 
            <MovieList movies={props.movies} movieTitle={props.randomMovie.Title} poster={props.randomMovie.Poster} year={props.randomMovie.Year} />
        : <p>Loading</p> }

            
        </>
    )
}

export default RandomMovie;