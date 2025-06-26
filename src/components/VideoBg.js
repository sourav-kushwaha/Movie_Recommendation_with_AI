import React, { useEffect, useState } from 'react';
import {API_OPTIONS} from '../utils/constants';



const VideoBg = ({movieId}) => {

  const [trailerId , setTrailerId] = useState(null);
 
  const getTrailer = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS );
    const json = await data.json();
    console.log(json);
    
    
  const filterData = json.results.filter((video) => video.type ==="Trailer")
  const trailer = filterData.length ? filterData[0] : json.results[0];
  console.log(trailer);
  setTrailerId(trailer.key);

  }

  
  useEffect(()=>{
      getTrailer();
  },[]);
// 
  return (
    <div className='h-full'>
      {<iframe className='w-screen  aspect-video' src={"https://www.youtube.com/embed/"+ trailerId +"?autoplay=1&mute=1&loop=1&playlist=" + trailerId} title='my video' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen="1"></iframe>}
    </div>
  )
}

export default VideoBg;
