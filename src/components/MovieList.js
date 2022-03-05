import React from 'react'

function MovieList(props) {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <>
        {props.movies.map((movie, index)=>{
            return <div className='container'>
              <img src={movie.Poster} alt='movie'></img>
              <div className='overlay' onClick={()=> props.handleFavoriteClick(movie)}><FavoriteComponent /></div>
                </div> 
        })}
    </>
  )
}

export default MovieList