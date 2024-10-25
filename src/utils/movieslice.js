import { createSlice } from "@reduxjs/toolkit";


const movieslice = createSlice(

    {
     name :"movie",
     initialState:{
        nowplayingmovies : null,
        videos : null,
        trendingmovies:null,
        topratedmovies:null,
        upcomingmovies:null
     },
     reducers:{
         addnowplayingMovies :(state,action)=>{
          state.nowplayingmovies=action.payload
         },
         addVideos :(state,action)=>{
           state.videos = action.payload
         },
         addTrendingMovies :(state,action)=>{
          state.trendingmovies=action.payload
         },
         addTopRatedMovies:(state,action)=>{
          state.topratedmovies= action.payload
         },
         addUpcomingMovies:(state,action)=>{
          state.upcomingmovies= action.payload
         },
         removeUpcomingMovies:(state)=>{
          state.upcomingmovies=null
         }
     }


    }



)

export const {addnowplayingMovies,addVideos,addTrendingMovies,addTopRatedMovies,addUpcomingMovies,removeUpcomingMovies}= movieslice.actions
export default movieslice.reducer