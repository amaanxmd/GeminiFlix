import React, { useEffect } from 'react'
import { options } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieslice';

const useGetUpcomingMovies = () => {
   const upcomingMovies = useSelector((store)=>store.movieReducer.upcomingmovies)
    const dispatch = useDispatch()
 async function getUpcomingMovies(){
    try{const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',options);
    const finaldata= await data.json()
    dispatch(addUpcomingMovies(finaldata.results))}
    catch(e){
      console.log(e)
    }
   //  console.log(finaldata.results)
 }
 useEffect(()=>{ !upcomingMovies&&getUpcomingMovies()},[])
}

export default useGetUpcomingMovies