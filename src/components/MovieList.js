import React from 'react';

const MovieList = (props) =>{
    console.log(props.movie);
    return(
        
         
        <div className='movie-list-container'>
            <h3 style={{ margin: "15px" }}>{props.movieTitle}</h3>
            <img style={{ margin: "15px" }} src= {props.poster} alt='movie'></img>
            <p style={{ margin: "15px" }}>{props.year}</p>
        </div>
        
        
    )
}

export default MovieList;