export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'+ process.env.REACT_APP_TMDB_API,
  }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const LANG_CHANGE = [
  {identifier:"en" , name:"English"},
   {identifier:"hindi" , name:"Hindi"},
    {identifier:"spanish" , name:"Spanish"},
];

export const GEMINI_AI = process.env.REACT_APP_GEMINI_AI;