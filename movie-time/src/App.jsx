import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import MovieList from './components/MovieList'
import HomePage from './components/HomePage'

function App() {
  const [list, setList] = useState("Home");
  const [searchInput, setSearchInput] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmittedSearch(searchInput);
  }

  useEffect (() => {
    setSubmittedSearch("");
    setSearchInput("");
  }, [list])

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='head-content'>
        <Header list={list}
                setList={setList}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                handleSearchSubmit={handleSearchSubmit} 
                />
        <div className='heading-container w-full sm:w-7/10 flex h-fit mx-auto md:mb-30'>
          <h2 className='movies-heading sm:text-4xl mx-auto lg:text-6xl mt-10 md:mt-35 lg:ml-30 sm:pb-4 font-bold border-b-4 border-neonblue'>
            {submittedSearch 
              ? submittedSearch 
              : list === "Home" 
                ? "Home" 
                : list === "Popular" 
                  ? "Popular" 
                  : list === "Highly Rated" 
                    ? "Highly Rated" 
                    : "Page Not Found"}
              
          </h2>
        </div>
      </div>
      <main className='main-content w-full sm:w-7/10 mx-auto flex-grow'>
        {list === "Home" 
        ? <HomePage /> 
        : list === "Popular" 
        ? <MovieList list={list}
                     setList={setList}
                     searchInput={searchInput}
                     setSearchInput={setSearchInput}
                     handleSearchSubmit={handleSearchSubmit}
                     submittedSearch={submittedSearch} 
                     URL={"https://api.themoviedb.org/3/movie/popular?api_key=49e64920f090899b128b5458922aca47"} 
                     /> 
        : list === "Highly Rated" 
        ? <MovieList list={list} 
                     setList={setList}
                     searchInput={searchInput}
                     setSearchInput={setSearchInput} 
                     handleSearchSubmit={handleSearchSubmit}
                     submittedSearch={submittedSearch}
                     URL={"https://api.themoviedb.org/3/movie/top_rated?api_key=49e64920f090899b128b5458922aca47"} 
                     />
        : <p>Invalid Request</p>}
      </main>
      <Footer />
    </div>
  )
}

export default App
