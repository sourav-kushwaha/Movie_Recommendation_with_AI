import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    console.log(movies);
     if (!movies || movies.length === 0) return null;
  return (
    <div className=''>
        <h1 className='text-3xl text-white p-6'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide '>
            
            <div className='flex space-x-10 '>
               {movies.map(movie=><MovieCard key={movie.id} posterPath = {movie.poster_path}/>)}
            </div>
        </div>
      
    </div>
  )
}

export default MovieList;
