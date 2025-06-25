import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import ai from '../utils/ai';
import { API_OPTIONS } from '../utils/constants';
import { addgeminiMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
    const SearchText = useRef(null);
    const dispatch = useDispatch();

   const tmdbSearch = async (movie) =>{
       const data = await fetch('https://api.themoviedb.org/3/search/movie?query=%27'+movie +'%27&include_adult=false&language=en-US&page=1', API_OPTIONS)
       const json = await data.json();
        return json.results;
    }

    const handleGeminiClick = async ()=>{
        console.log(SearchText.current.value);
      
        const geminiQuery = "Act as a movie recommendation system and suggest some movies for the query " + SearchText.current.value + ". only give me names of 5 movies , comma seperated like the example result given ahead . Example Result : Don , Golmal , koi Milgaya , 50 shades of Grey";
  const apiResults = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: geminiQuery,
  });
//   console.log(apiResults.text);

  const moviesProvided = apiResults.text.split(",");
  console.log(moviesProvided);

  const promiseArray = moviesProvided.map((movie)=>tmdbSearch(movie));
  const tmdbResults = await Promise.all(promiseArray);
  console.log(tmdbResults);

  dispatch(addgeminiMovieResult ({movieNames : moviesProvided , movieResults :tmdbResults}));
};

    
  return (
    <div className=' flex justify-center  '>
         <img className=' -z-10 fixed' src='https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg' alt='background'/>
      <form className=' mt-[10%] w-1/2 bg-black grid grid-cols-12'onSubmit={(e)=>e.preventDefault()}>
        <input ref={SearchText} className="p-4 m-4 col-span-10"type='text' placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button className=' col-span-2 text-white font-bold m-4 px-4 bg-red-700 rounded-sm ' onClick={handleGeminiClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
