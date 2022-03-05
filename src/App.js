import React,{useEffect, useState} from 'react'
import './App.css'
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import Search from './components/Search';
import AddFavorite from './components/AddFavorite';
import RemoveFav from './components/RemoveFav';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('star wars')
  

const getMovieRequest = async(searchValue) =>{
 const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5a904f11`

const response = await fetch(url);
const responseJson = await response.json()
if(responseJson.Search){
setMovies(responseJson.Search)
}
}
useEffect(()=>{
  getMovieRequest(searchValue)
},[searchValue])

const addFavoriteMovie = (movie)=>{
const newFavoriteList = [...favorites, movie]
setFavorites(newFavoriteList)
}

const removeFavoriteMovie = (movie)=>{
  const newFavoriteList = favorites.filter(
    (favorite) => favorites.imdbID !== movie.imdbID
   );
  setFavorites(newFavoriteList)
  }
  

  return (
    <div className='App'>
      <div className='nav'>
        <Heading heading='Movies'/>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
      <MovieList movies= {movies} handleFavoriteClick={addFavoriteMovie} favoriteComponent={AddFavorite} />
      </div>
      <div className='row'>
        <Heading heading='Favorites'/>
        
      </div>
      <div className='row'>
      <MovieList movies= {favorites} handleFavoriteClick={removeFavoriteMovie} favoriteComponent={RemoveFav} />
      </div>
    </div>
  )
}

export default App
