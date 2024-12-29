import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowplayingMovies } from "../utils/movieslice";
import { options } from "../utils/constant";
import { useSelector } from "react-redux";
export const useGetNowPlayingMovies=()=>{
   const movies = useSelector((store)=>store.movieReducer.nowplayingmovies)
   const dispatch = useDispatch()

    
      async function getMovies(){
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',options)
        const finaldata = await data.json()
      //   console.log(finaldata.results)
        dispatch(addnowplayingMovies(finaldata.results))
        
     }
     useEffect(()=>{!movies && getMovies()},[])

     

}