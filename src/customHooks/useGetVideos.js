import { useEffect } from "react"
import { options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addVideos } from "../utils/movieslice"
import { useSelector } from "react-redux"

export const useGetVideos = (movieid)=>{
    const videos= useSelector((store)=>store.movieReducer.videos)
    const dispatch = useDispatch()

    async function getVideos(){

       const data = await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US',options)
       const finaldata  = await data.json()
       dispatch (addVideos(finaldata.results))
    }

    useEffect(()=>{!videos&&getVideos()},[movieid])
}