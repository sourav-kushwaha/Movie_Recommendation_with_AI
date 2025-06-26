import React from 'react'
import VideoBg from './VideoBg';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';


const MainContainer = () => {
const movies = useSelector((store) => store.movies.nowPlayingMovies);
console.log(movies);
 if (!movies) return null;
     
const mainMovie =  movies[6];
console.log(mainMovie);

const {original_title , overview , id } = mainMovie;

  return (
    <div>
     <VideoTitle title={original_title} overview = {overview} />
      <VideoBg movieId = {id}/>
    </div>
  )
}

export default MainContainer;
