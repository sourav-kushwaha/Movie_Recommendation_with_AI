import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-56 px-28 absolute bg-gradient-to-r from-black' >
      <h1 className='font-bold text-5xl text-white'>{title}</h1>
      <p className='w-1/3 text-lg py-6 text-white'>{overview}</p>
      <div>
       <button className='bg-white text-black font-bold  p-4 px-12 text-xl bg-opacity-70 rounded-lg hover:bg-gray-500 ' > Play</button> 
        <button className='bg-black mx-4 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-gray-700 ' >   More Info</button> 
      </div>
      
    </div>
  )
}

export default VideoTitle;
