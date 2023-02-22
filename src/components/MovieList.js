import React from 'react';

const MovieList = (props) =>{
    console.log(props.movie);
    return(
        
         
        <div className='movie-list-container'>
            <h3 style={{ margin: "10px" }}>{props.movieTitle}</h3>
            <img style={{ margin: "1px" }} src= {props.poster} alt='movie'></img>
            <p style={{ margin: "5px" }}>{props.year}</p>
        </div>
        
        
    )
}

export default MovieList;