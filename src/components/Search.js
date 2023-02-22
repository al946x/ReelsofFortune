import React from 'react';

function Search(props) {



  function randomButton() {
    props.movieRequest()
  }


  return (
    <div className="random-btn">
      <button className= 'btn' onClick={randomButton}>RANDOMISE!</button>

    </div>
  )
}

export default Search;