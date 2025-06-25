import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice( {
    name: "movie",
    initialState:{ 
        nowPlayingMovies: null,
        currentTrailer : null,
        popularMovies: null,
        topRated:null,
        upcomingMovies:null,
    },
   
    reducers:{
        addNowPlayingMovies :(state , action)=>{
           state.nowPlayingMovies = action.payload;
        },
        addTrailer : (state,action) =>{
            state.currentTrailer = action.payload;
        },
         addPopularMovies :(state , action)=>{
           state.popularMovies = action.payload;
        },
         addTopRatedMovies :(state , action)=>{
           state.topRated = action.payload;
        },
         addUpcomingMovies :(state , action)=>{
           state.upcomingMovies = action.payload;
        },

    }
});

export const {addNowPlayingMovies , addTrailer, addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
