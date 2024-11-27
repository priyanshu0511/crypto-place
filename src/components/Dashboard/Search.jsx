import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Search = ({search, onSearchChange}) => {

  return (
    <div className='flex flex-start items-center gap-6 px-12 py-4 text-gray w-10/12 bg-darkgray m-4 ml-auto mr-auto rounded-3xl'>
        <FaSearch />
        <input type="text" 
        className='bg-darkgray w-full outline-none text-base' 
        placeholder='Search...'
        value={search}
        onChange={(e)=>onSearchChange(e)}
        />
    </div>
  )
}

export default Search