import React from 'react'
import './search.css'
function Search(props) {
  return (
    <div className='search'>
        <input type='search' value={props.value} onChange={(event)=>{
          props.setSearchValue(event.target.value)
        }} placeholder='search...' color='white' />
    </div>
  )
}

export default Search