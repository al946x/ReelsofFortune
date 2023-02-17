import React from 'react';

const MovieList = (props) =>{
    console.log(props.movie);
    return(
        <>
         {props.movies.Search.map((movie, index)=>
          <div key={index} className='d-flex justify-content-start'>
            <h3>{props.movieTitle}</h3>
            <img src= {props.poster} alt='movie'></img>
            <p>{props.year}</p>
         </div>)}
        </>
    )
}

export default MovieList;