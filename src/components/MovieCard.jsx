import React from 'react'
import star from '../assets/images/star-small.png'
import PropTypes from 'prop-types'

const MovieCard = ({movie}) => {

  return (
    <div className='movie-card w-32 md:w-60 2xl:w-80  bg-darkerbrown flex flex-col items-center border-none rounded-md shadow-2xl'>
      <a href="" className='w-fit mt-8'><img className='w-fit' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} /></a>
      <div className='movie-details w-fit text-center'>
        <h3 className='movie-title text-xl my-4'>{movie.title}</h3>
        <div className='movie-date text-center mb-4'>
          <p>{movie.release_date}</p>
        </div>
        <div className='rating flex justify-center mb-4'>
          <img src={star}/>
          <p>{typeof movie.vote_average === 'number'
              ? movie.vote_average.toFixed(1) 
              : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
};

MovieCard.propTypes={
    movie: PropTypes.shape({
      id:PropTypes.number.isRequired,
      poster_path:PropTypes.string.isRequired,
      title:PropTypes.string.isRequired,
      release_date:PropTypes.string,
      vote_average:PropTypes.number,
      overview:PropTypes.string,
    }).isRequired
  }
export default MovieCard
