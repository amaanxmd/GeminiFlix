import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { options } from '../utils/constant'
import { addTrendingMovies } from '../utils/movieslice'
import { useSelector } from 'react-redux'

const useGetTrendingMovies = () => {
    const trendingMovies = useSelector((store)=>store.movieReducer.trendingmovies)
    const dispatch= useDispatch()
    async function getTrendingMovies(){
       const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options);
       const finaldata = await data.json()
       dispatch(addTrendingMovies(finaldata.results))
    }
    useEffect(()=>{!trendingMovies && getTrendingMovies()},[])
  
}

export default useGetTrendingMovies