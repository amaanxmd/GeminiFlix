import React, { useEffect, useRef, useState ,useLayoutEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSearchMovies from '../customHooks/useSearchMovies';
import ResultsCard from './ResultsCard';
import GptSearch from './GptSearch';
import { togglegpt,updatestartandend } from '../utils/gptslice';
import Shimmer from './Shimmer';
import useGetUpcomingMovies from '../customHooks/useGetUpcomingMovies';
import SideStickyPageContent from './SideStickyPageContent';

const parsejson=()=>{
     try{return JSON.parse(sessionStorage.getItem('results'))}catch(e){return ""}
}

const SearchResults = () => {
    useGetUpcomingMovies()
    const [randomvaluesforsticky,setrandomvaluesforsticky] = useState(Math.floor(Math.random()*16))
    const upcomingMovies = useSelector((store)=>store.movieReducer.upcomingmovies)
    const queryobj =useSelector((store)=>store.gptReducer.query)
    const startandend =useSelector((store)=>store.gptReducer.startandend)
    const arrforshimmer = new Array(10).fill(0)
    const resultdivHeight= useRef(null)
    const [height, setHeight] = useState(1644);
    
    
    const dispatch = useDispatch()
    const toggle = useSelector((store)=>store.gptReducer.toggle)
    const [movielist,setmovielist] =useState(null)
    useEffect(()=>{  setmovielist(parsejson())},[queryobj])
    useEffect(()=>{if(resultdivHeight.current)setHeight(resultdivHeight.current.offsetHeight)},[startandend])
   
    useSearchMovies(movielist)
   
    
    const moviedata = useSelector((store) => store.fetchedMovieReducer.list);
    const disablePrevious = startandend.start === 0;
    const disableNext = moviedata && startandend.end >= moviedata.length;
    
        
    function handleclick(){
     dispatch(togglegpt())
    }
    
    
    return (
        <div className='pl-36 pt-14 relative  '>
            {toggle && <div className="w-full h-full top-0 left-0 absolute z-30" onClick={handleclick}></div>}
            {toggle&& <GptSearch/>} 
         <div className='w-2/3' >
         {movielist!==""?<div>
         {moviedata?<div ref={resultdivHeight} className='flex flex-col gap-4 mt-2'>
            {moviedata.length?moviedata.slice(startandend.start,startandend.end).map((data)=><ResultsCard key={data.id} moviedata={data}/>):<img src='https://cdn.dribbble.com/userupload/2905354/file/original-92212c04a044acd88c69bedc56b3dda2.png?resize=1200x900'/>}
            </div>:<div className='flex flex-col gap-4'>{arrforshimmer.map((_,index)=><Shimmer key={index}/>)}</div>}</div>:<img src='https://cdn.dribbble.com/userupload/2905354/file/original-92212c04a044acd88c69bedc56b3dda2.png?resize=1200x900'/>}
            
           { <div className='flex  justify-center gap-3 mt-2 '>
          {moviedata&&moviedata.length!==0&& <button disabled={disablePrevious}  className={`text-white rounded ${disablePrevious ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400/80' : 'bg-red-600 hover:bg-red-600/80' } p-1 `} onClick={()=>{if(startandend.start!==0){dispatch(updatestartandend({start:startandend.start-10,end:startandend.start}))};if(moviedata)setrandomvaluesforsticky(Math.floor(Math.random()*16))}}>Previous</button>}
          {moviedata&&moviedata.length!==0&& <button disabled={disableNext} className={`text-white rounded ${disableNext ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400/80' : 'bg-red-600  hover:bg-red-600/80'} p-1`} onClick={()=>{if(moviedata && moviedata.length>startandend.end){dispatch(updatestartandend({start:startandend.end,end:startandend.end+10}))};if(moviedata  )setrandomvaluesforsticky(Math.floor(Math.random()*16))}}>Next</button>}
           </div>}
           </div>
           <div style={{height: `${height}px`}} className='text-white absolute top-16 right-28  w-80 rounded bg-red/600 '>
            
           <div className='w-full sticky h-screen top-14 rounded  bg-black p-2 text-red-600 font-bold text-xl '>upcoming Movies<div className='flex mt-4 flex-col justify-between   gap-2'>{ upcomingMovies? upcomingMovies.slice(randomvaluesforsticky,randomvaluesforsticky+5).map((data, index)=><SideStickyPageContent key={index} upcoming ={data}/>):<Shimmer/>}</div></div>
           </div>
        </div>
    )
}

export default SearchResults;
