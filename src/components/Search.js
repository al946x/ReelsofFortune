import React from 'react';
import { useState, useEffect } from 'react';

function Search(props) {



  function randomButton() {
    props.movieRequest()
  }


    return(
        <div className='col col-sm-5'>
          <button onClick={randomButton}>Randomise!</button>

        </div>
    )
}

export default Search;