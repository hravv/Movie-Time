import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({list, setList, URL, searchInput, setSearchInput, submittedSearch, handleSearchSubmit}) => {

  const [movies, setMovies] = useState([]);
  const [unfilteredMovies, setUnfilteredMovies] = useState([])
  const [chosenRating, setChosenRating] = useState('');

  const [sortValue, setSortValue] = useState('Sort By');
  const [ascDesc, setAscDesc] = useState("Ascending");

  useEffect(()=> {
    fetchMovies(URL);
  }, [URL])

  async function fetchMovies (URL) {
    try {
    const res = await fetch(URL);
    const data = await res.json();
    setMovies(data.results);
    setUnfilteredMovies(data.results);
    } catch (error) {
      console.error("Failed to fetch movies: ", error)
      setMovies([]);
      setUnfilteredMovies([]);
    }
  }  

  async function searchMovies () {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${submittedSearch}&api_key=49e64920f090899b128b5458922aca47`);
      const data = await res.json();
      setMovies(data.results);
      setUnfilteredMovies(data.results);
    } catch (error) {
      setMovies([]);
      setUnfilteredMovies([]);
    }
  }

  useEffect(() => {
    if (submittedSearch) {
      searchMovies();
    } else {
      fetchMovies(URL);
    }
  }, [submittedSearch])

  const handleFilter = (rating) => {
    if (chosenRating === rating) {
      setChosenRating('');
    } else {
      setChosenRating(rating);
    }
  };

  const getFilteredMovies = () => {
    if (!chosenRating) return unfilteredMovies;
    return unfilteredMovies.filter((movie)=> Number(movie.vote_average.toFixed(1)) >= Number(chosenRating))
  }

  const getSortedMovies = (movieArray) => {
    if (sortValue === "Rating") {
      return [...movieArray].sort((a, b) =>
        ascDesc === "Ascending"
        ? a.vote_average - b.vote_average
        : b.vote_average - a.vote_average
    );
    }
    if (sortValue === "Date") {
      return [...movieArray].sort((a, b) =>
        ascDesc === "Ascending"
        ? new Date(a.release_date) - new Date(b.release_date)
        : new Date(b.release_date) - new Date(a.release_date)
      ); 
    }
    if (sortValue === "Sort By") {
      return movieArray;
    }
    return movieArray;
  }

  useEffect(() => {
  const filtered = getFilteredMovies();
  const sorted = getSortedMovies(filtered);
  setMovies(sorted);
}, [chosenRating, sortValue, ascDesc, unfilteredMovies]);

  

  return (
    <section className='movie-list bg-black/70 min-h-300 mb-30 pb-20'>
      <header className='movies-header flex sm:justify-center xl:justify-end'>
        <div className='movie-list-filters flex sm:w-100 lg:w-fit h-fit lg:mr-20 lg:mt-25 mb-25 px-8 gap-x-2 border-neonblue border-b-4 relative'>
            <ul className='age-filters flex justify-evenly sm:mr-5 lg:mr-30 h-fit gap-x-9 pb-3'>
                <li onClick={()=> handleFilter(7)} className={`age-filter-item font-bold sm:text-2xl lg:text-4xl p-2 ${chosenRating === 7 ? "bg-neonblue text-black border-none rounded-xl" : ""}`}>7+</li>
                <li onClick={()=> handleFilter(8)} className={`age-filter-item font-bold sm:text-2xl lg:text-4xl p-2 ${chosenRating === 8 ? "bg-neonblue text-black border-none rounded-xl" : ""}`}>8+</li>
                <li onClick={()=> handleFilter(9)} className={`age-filter-item font-bold sm:text-2xl lg:text-4xl p-2 ${chosenRating === 9 ? "bg-neonblue text-black border-none rounded-xl" : ""}`}>9+</li>
            </ul>
            <div className='selects flex items-center gap-x-5 pb-3'>
              <select name="sort-by" id="sort" onChange={(e)=> setSortValue(e.target.value)} className='movie-sort h-fit bg-white text-black'>
                  <option value="Sort By">Sort By</option>
                  <option value="Date">Date</option>
                  <option value="Rating">Rating</option>
              </select>
              <select name="sort-a-d" id="sort-a-d" onChange={(e)=> setAscDesc(e.target.value)} className='movie-sort h-fit bg-white text-black'>
                  <option value="Ascending">Ascending</option>
                  <option value="Descending">Descending</option>
              </select>
            </div>
        </div>
      </header>
      <div className='movie-list mx-auto grid grid-cols-2 lg:grid-cols-3 gap-14 w-fit'>
        {movies.length > 0 ? (movies.map((movie)=> (
          <MovieCard key={movie.id} movie={movie} />
        ))) : (<p className='col-span-3 mx-auto text-3xl mb-20'>No movies found</p>)}
      </div>
    </section>
  )
}

export default MovieList
