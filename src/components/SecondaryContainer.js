import { useSelector } from "react-redux"
import List from "./List"
import useGetTrendingMovies from "../customHooks/useGetTrendingMovies"
import useGetTopRatedMovies from "../customHooks/useGetTopRatedMovies"
import useGetUpcomingMovies from "../customHooks/useGetUpcomingMovies"

export const SecondaryContainer = ({movie})=>{
    const trendingMovies = useSelector((store)=>store.movieReducer.trendingmovies)
   useGetTrendingMovies()
   const topRatedMovies = useSelector((store)=>store.movieReducer.topratedmovies)
    useGetTopRatedMovies()
    const upcomingMovies = useSelector((store)=>store.movieReducer.upcomingmovies)
   useGetUpcomingMovies()
    


return (<div className='px-2 sm:px-6 sm:-mt-32 bg-transparent z-10 relative overflow-hidden  '>
 <div className="flex flex-col  justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 ">
    <List name= "Now Playing" movieList= {movie} />
    {  <List name= "Trending" movieList= {trendingMovies} />}
   {<List name= "Top Rated" movieList = {topRatedMovies}/>}
   { <List name= "Upcoming" movieList = {upcomingMovies}/>}
   </div>
   
</div>)

}