import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';


function AddFavorite(props) {
 
  return (
    <>
    <span>Add to Favourite</span>
    <FavoriteIcon style={{ fill: 'red' }}/>
    </>
  )
}

export default AddFavorite