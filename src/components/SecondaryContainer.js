import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies && (
       <div className='bg-black w-screen'>
        <div className='relative  p-10 -mt-72 z-20'>
          <MovieList title={"धांसू पिक्चर"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Top Rated"} movies={movies?.topRated}/>
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
         <MovieList title={"Different Genre"} movies={movies?.popularMovies}/>
           </div>
      
    </div>
    )
   
  )
}

export default SecondaryContainer;
