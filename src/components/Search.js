import React from 'react';

function Search(props) {



  function randomButton() {
    props.movieRequest()
  }


  return (
    <div>
      <button className= 'btn' onClick={randomButton}>RANDOMISE!</button>

    </div>
  )
}

export default Search;