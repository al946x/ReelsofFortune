import React from 'react';

const MovieList = (props) =>{
    console.log(props.movie);
    return(
        <>
         {props.movies.Search.map((movie, index)=>
          <div key={index} className='d-flex justify-content-start'>
            <img src= {props.poster} alt='movie'></img>
         </div>)}
        </>
    )
}

export default MovieList;