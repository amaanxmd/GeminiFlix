import { useEffect } from 'react'
import { options } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addfetchedquery,removefetchedquery } from '../utils/fetchedmoviefromqueryslice'


const useSearchMovies = (movielist) => {
  const dispatch =useDispatch()

   async function searchMovies(){
    
    try{
     
    if (!movielist?.movieList)return
   
   const moviedata= await Promise.all( movielist.movieList.map(async(data)=>{ const movie = await fetch(`https://api.themoviedb.org/3/search/movie?query=${data.title}&include_adult=true&language=en-US&page=1`,
                options);
           const json =await movie.json() ;
           
            return json.results}))
            const lengthsofsubarray = ((moviedata.map((subarray)=>subarray.length)))
            const maxElementinArray = Math.max(...lengthsofsubarray)
            const newmovieList = Array.from({ length: maxElementinArray }, (_, index) => 
             
               moviedata.map((arr) => arr[index]===undefined?"":arr[index] ).filter((arr)=>arr!==''))
               const totalMovieData = newmovieList.flat()//could contain duplicates
               const idsOfMovieData =totalMovieData.map((data)=>data.id)
               const booleanMovieData = idsOfMovieData.map((data,index)=>idsOfMovieData.indexOf(data)===index?true:false)
               const updatedMovieData =totalMovieData.filter((_,index)=>booleanMovieData[index]===true)

             
      dispatch(addfetchedquery(updatedMovieData))
          
} catch(e){
  dispatch(removefetchedquery())
  console.log(e)
}
  }
  
 useEffect(()=>{searchMovies()},[movielist?.movieList?.length])

}

export default useSearchMovies

