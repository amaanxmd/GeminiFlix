import { useSelector } from "react-redux"
import { useGetVideos } from "../customHooks/useGetVideos"
import { url } from "../utils/constant"
import React from "react"

export const VideoContainer  = ({movie})=>{
    useGetVideos(movie.id)
    const videos= useSelector((store)=>store.movieReducer.videos)
     let  video = null
    if (videos){
       video =videos.filter((data)=>data.type==="Trailer")
    }
    
    
    return (<div><div className="sm:block hidden">
    
   <div className=" absolute sm:top-[50vh] sm:-translate-y-1/2 z-10 w-[383.46px] left-12 flex flex-col items-start   " > 
    <h1 className="text-red-600 text-5xl font-bold mb-4">{movie.title}</h1>
    <p className="text-white mb-4">{movie.overview}</p>
    <div className="">
    <button className="text-black bg-white rounded mr-2 px-7 py-2 hover:bg-white/80">&#10148; Play</button>
    <button className="text-white bg-gray-400 rounded px-7 py-2 hover:bg-gray-400/80">&#10102; More Info</button>
    </div>
    
    </div>

    <div className="h-screen w-full">
       <div className="bg-black/50 w-full h-full absolute">

       </div>
        { video &&<iframe className="w-full h-full "  src={"https://www.youtube.com/embed/"+video[0].key+"?&autoplay=1&mute=1&loop=1&&playlist="+video[0].key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
        {video && <div className="w-full h-full"></div>}
        </div>

</div>
<div>
   {<img className='rounded sm:hidden hover:scale-125  transition-transform duration-300' src={url+movie.poster_path}/>}
</div>
</div>)
}