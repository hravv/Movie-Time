import React, { useState } from 'react'
import searchIcon from '../assets/images/search.png'
import './header.css'
const Header = ({list, setList, searchInput, setSearchInput, handleSearchSubmit}) => {

  return (
    <header className='w-full flex flex-col md:flex-row justify-evenly md:py-12 shadow-2xl z-10 mt-8 md:mt-0'>
      <nav className='navigation w-full md:w-2/5 my-auto'>
            <ul className='nav-bar flex justify-evenly space-x-1 md:space-x-6'>
                <li onClick={()=> setList("Home")} className='nav-item cursor-pointer text-white text-[0.9rem] lg:text-2xl'>Home</li>
                <li onClick={()=> setList("Popular")} className='nav-item cursor-pointer text-white text-[0.9rem] lg:text-2xl'>Popular</li>
                <li onClick={()=> setList("Highly Rated")} className='nav-item cursor-pointer text-white text-[0.9rem] lg:text-2xl text-nowrap'>Highly Rated</li>
            </ul>
      </nav>
      <div className='titlesection w-full md:w-3/10 my-4 md:my-0'>
        <div className='title w-fit bg py-5 px-3 rounded-3xl mx-auto'>
          <h1 className='text-4xl lg:text-5xl text-amber-50 font-bold font-[Roboto_Slab]'><span className='text-neonblue'>M</span>ovie<span className='text-neonblue'>T</span>ime</h1>
        </div>
      </div>
      <div className='w-full md:w-2/5 flex items-center justify-center md:justify-end mt-4 md:mt-0'>
        <form onSubmit={handleSearchSubmit} className="flex items-center justify-end">
          <input
            type="text"
            name="search"
            className="search bg-white text-black h-7 md:h-8 border-none rounded-md pl-4 w-[8-rem]  md:w-[15rem]"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" className="mx-3 cursor-pointer w-fit" >
            <img src={searchIcon} alt="Search" className='min-w-5' />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
