import React from "react";

function RandomMovie(props) {
    const movies = props.movies;

    return (
        {movies ? 

            <MovieList movies={props.movies} movieTitle={props.randomMovie.Title} poster={props.randomMovie.Poster} year={randomMovie.Year} />

            : <p>Loading</p> }
            <Search randomMovie={props.randomMovie} movieRequest={props.getMovieRequest} />
    )
}