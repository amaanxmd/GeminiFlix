import { useSelector } from "react-redux"
import { useGetVideos } from "../customHooks/useGetVideos"
import { url } from "../utils/constant"
import React, { useEffect }  from "react"
import { useState,useRef } from "react"

export const VideoContainer  = ({movie})=>{
   const [pause,setpause]=useState(false)
   const[mute,setmute]=useState(true)
   const iframeRef =useRef(null)
   const detectOverflow = useRef(null)
   const [overflow,setoverflow]=useState(false)
   const [showCurrentMovieDetails,setshowCurrentMovieDetails]=useState(false)
    useGetVideos(movie.id)
    const videos= useSelector((store)=>store.movieReducer.videos)
     let  video = null
    if (videos){
       video =videos.filter((data)=>data.type==="Trailer")
    }
    const sendMessage = (command) => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: command, args: [] }),
          "*"
        );
      }
    };
    // function checkOverflow(){
    //   if(detectOverflow.current.offsetTop+detectOverflow.current.clientHeight>detectOverflow.current.parentNode.clientHeight)setoverflow(true)
    //   {
    //     setoverflow(true)
    //   }
    // }
    // useEffect(()=>{window.addEventListener('resize',checkOverflow);if(detectOverflow.current.offsetTop+detectOverflow.current.clientHeight>detectOverflow.current.parentNode.clientHeight)setoverflow(true);return window.removeEventListener('resize',checkOverflow)},[])
    
    return (<div><div className="flex flex-col gap-2 sm:block relative">
       
   
   <div  style={{
    backgroundImage: !showCurrentMovieDetails? `url('${url + movie.poster_path}')`:"",
  }} onClick={()=>{setshowCurrentMovieDetails(!showCurrentMovieDetails)}} className={` removeBg transition-all duration-300 ease-in-out   order-2 ${showCurrentMovieDetails?"relative px-2 pt-20    ":"absolute bg-cover   bottom-0 h-10 w-10 rounded-full  sm:rounded-none overflow-hidden sm:h-fit animate-pulse sm:animate-none "}    -mt-20   sm:-m-0    sm:py-0 sm:px-0 sm:absolute sm:top-[50vh] sm:-translate-y-1/2 z-20 sm:w-[383.46px]  sm:left-12 flex flex-row sm:flex-col sm:items-start items-end flex-wrap sm:gap-2   ` }> 
   
   <div onClick={()=>{setshowCurrentMovieDetails(!showCurrentMovieDetails)}} className=" absolute top-20 right-0 before:h-10 before:w-10  before:absolute before:right-0 before:content-['X']  before:flex before:items-center before:justify-center before:text-white before:text-2xl sm:before:content-[] "></div>
   <div className=" sm:hidden  w-1/3 h-full  ">
   {<img className='rounded sm:hidden h-full  w-full  ' src={url+movie.poster_path}/>}
</div>
<div className="w-2/3 relative  sm:w-auto sm:h-auto h-[50vw] overflow-y-auto scrollbar-none overflow-hidden px-2 sm:px-0">
    {<h1 className={` ${showCurrentMovieDetails?"text-red-600 text-3xl sm:text-5xl font-bold mb-4 mt-2 sm:mt-0":"text-transparent  sm:text-5xl sm:text-red-600 sm:font-bold sm:mb-4 "}`}>{movie.title}</h1>}
    {<p ref={detectOverflow} className={`relative ${showCurrentMovieDetails?"text-white sm:text-base text-sm sm:mb-4 ":"sm:text-white sm:text-base sm:mb-4"}`}>{movie.overview}</p>}

</div>
    <div className="">
    <button onClick={(e)=>{setpause(!pause);sendMessage(`${pause?'playVideo':'pauseVideo'}`)}} className="text-black relative sm:inline hidden bg-white rounded mr-2 pl-7 pr-4 py-2 hover:bg-white/80"><span className={`${pause?"absolute left-1 text-2xl bottom-0 mb-[5.5px]":"absolute left-1.5 bottom-0 text-xl mb-[7.5px]"}`}>{pause?"\u23F5":'⏸︎'}</span>  {pause?"Play":"Pause"}</button>
    <button onClick={(e)=>{setmute(!mute);sendMessage(`${mute?'unMute':'mute'}`)}} className="text-white relative sm:inline hidden bg-gray-400 rounded pl-8 pr-4 py-2 hover:bg-gray-400/80"><span className={`text-lg ${mute?"absolute left-4 bottom-0 mb-[5.609px] ":"absolute left-2 bottom-0 mb-[5.609px] "}`}>{mute?"🔈︎":"🔇︎"}</span> {mute?"Unmute":"Mute"}</button>
    </div>
    
    </div>
    

    <div className="order-1 sm:h-screen h-[50vh] w-full relative overflow-hidden">
       <div className="bg-black/50 w-full h-full absolute top-0 z-10 ">

       </div>
        { video &&<iframe ref={iframeRef} className="sm:w-full sm:h-full w-full aspect-square sm:aspect-auto sm:scale-100 scale-y-[6] scale-x-[3]  "  src={"https://www.youtube.com/embed/" + video[0]?.key + 
"?enablejsapi=1&autoplay=1&mute=1&loop=1&rel=0&playlist=" + video[0]?.key
} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
        {video && <div className="w-full h-full"></div>}
        </div>

</div>

</div>)
}