import React, { useEffect } from 'react'
import { options } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieslice';
import { useSelector } from 'react-redux';

const useGetTopRatedMovies = () => {
   const topRatedMovies = useSelector((store)=>store.movieReducer.topratedmovies)
    const dispatch = useDispatch()
 async function getTopRatedMovies(){
    try{const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options);
    const finaldata = await data.json()
    dispatch(addTopRatedMovies(finaldata.results))}
    catch(e){
      console.log(e)
    }
 }
 useEffect(()=>{!topRatedMovies && getTopRatedMovies()},[])
}

export default useGetTopRatedMovies