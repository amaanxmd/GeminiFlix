import React, { useEffect, useRef, useState ,} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSearchMovies from '../customHooks/useSearchMovies';
import ResultsCard from './ResultsCard';
import GptSearch from './GptSearch';
import { togglegpt,updatestartandend, } from '../utils/gptslice';
import Shimmer from './Shimmer';
import useGetUpcomingMovies from '../customHooks/useGetUpcomingMovies';
import SideStickyPageContent from './SideStickyPageContent';
import Error from './Error';




const SearchResults = () => {
    
    const results =sessionStorage.getItem('results')
    const json = JSON.parse(results)
    useGetUpcomingMovies()
    const [randomvaluesforsticky,setrandomvaluesforsticky] = useState(Math.floor(Math.random()*16))
    const upcomingMovies = useSelector((store)=>store.movieReducer.upcomingmovies)
    const queryobj =useSelector((store)=>store.gptReducer.query)
    const startandend =useSelector((store)=>store.gptReducer.startandend)
    const arrforshimmer = new Array(10).fill(0)
    
    
    
    
    const dispatch = useDispatch()
    const toggle = useSelector((store)=>store.gptReducer.toggle)
    // const [movielist,setmovielist] =useState(results)
    // useEffect(()=>{if(toggle){dispatch(togglegpt())}},[toggleBeforeDataseConnection])
    // useEffect(()=>{if(resultdivHeight.current)setHeight(resultdivHeight.current.offsetHeight)},[startandend])
    
    useSearchMovies(queryobj||json)
    
    
    const moviedata = useSelector((store) => store.fetchedMovieReducer.list);
    const disablePrevious = startandend.start === 0;
    const disableNext = moviedata && startandend.end >= moviedata.length;
    
    
        
    function handleclick(){
     dispatch(togglegpt())
    }
    
    console.log(json)
    console.log(queryobj)
    console.log(moviedata)
    return (
        <div className='px-2 sm:px-12 lg:px-44 pt-14 relative lg:flex lg:gap-x-4  '>
            {toggle && <div className="w-full h-full top-0 left-0 absolute z-30" onClick={handleclick}></div>}
            {toggle&& <GptSearch/>} 
         <div className='lg:w-2/3 mt-3' >
        {(queryobj?.movieList?.length||json?.movieList.length)? <div className='flex flex-col gap-y-2'>
            {/* {moviedata?moviedata?.length>0?moviedata.slice(startandend.start,startandend.end).map((data)=><ResultsCard key={data.id} moviedata={data}/>):<div className='flex flex-col gap-4'>{arrforshimmer.map((_,index)=><Shimmer key={index}/>)}</div>:<Error/>} */}
            {!moviedata?<div className='flex flex-col gap-4'>{arrforshimmer.map((_,index)=><Shimmer key={index}/>)}</div>:moviedata.length>0?moviedata.slice(startandend.start,startandend.end).map((data)=><ResultsCard key={data.id} moviedata={data}/>):<Error/>}
        
            </div>:<div><Error type={"Gemini"}/></div>}

            {/* {moviedata?<div  className='flex flex-col gap-4 mt-2'>
            {moviedata.length?moviedata.slice(startandend.start,startandend.end).map((data)=><ResultsCard key={data.id} moviedata={data}/>):<Error/>}
            </div>:<div className='flex flex-col gap-4'>{arrforshimmer.map((_,index)=><Shimmer key={index}/>)}</div>} */}
            
            
           { <div className='flex  justify-center gap-3 mt-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2 '>
          {moviedata&&moviedata.length!==0&& <button disabled={disablePrevious}  className={`text-white rounded ${disablePrevious ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400/80' : 'bg-red-600 hover:bg-red-600/80' } p-1 `} onClick={()=>{if(startandend.start!==0){dispatch(updatestartandend({start:startandend.start-10,end:startandend.start}))};if(moviedata)setrandomvaluesforsticky(Math.floor(Math.random()*16))}}>Previous</button>}
          {moviedata&&moviedata.length!==0&& <button disabled={disableNext} className={`text-white rounded ${disableNext ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400/80' : 'bg-red-600  hover:bg-red-600/80'} p-1`} onClick={()=>{if(moviedata && moviedata.length>startandend.end){dispatch(updatestartandend({start:startandend.end,end:startandend.end+10}))};if(moviedata  )setrandomvaluesforsticky(Math.floor(Math.random()*16))}}>Next</button>}
           </div>}
           </div>
           <div  className='text-white   w-1/3 rounded lg:block hidden mt-3 '>
            
           <div className='w-full  sticky top-14 rounded  bg-black p-2 text-red-600 font-bold text-xl '>upcoming Movies<div className='flex mt-4 flex-col justify-between   gap-2'>{ upcomingMovies? upcomingMovies.slice(randomvaluesforsticky,randomvaluesforsticky+5).map((data, index)=><SideStickyPageContent key={index} upcoming ={data}/>):<Shimmer/>}</div></div>
           </div>
           
        </div>
    )
}

export default SearchResults;


// {movielist!==""?<div>
//     {moviedata?<div  className='flex flex-col gap-4 mt-2'>
//        {moviedata.length?moviedata.slice(startandend.start,startandend.end).map((data)=><ResultsCard key={data.id} moviedata={data}/>):<img src='https://cdn.dribbble.com/userupload/2905354/file/original-92212c04a044acd88c69bedc56b3dda2.png?resize=1200x900'/>}
//        </div>:<div className='flex flex-col gap-4'>{arrforshimmer.map((_,index)=><Shimmer key={index}/>)}</div>}</div>
//        :<img src='https://cdn.dribbble.com/userupload/2905354/file/original-92212c04a044acd88c69bedc56b3dda2.png?resize=1200x900'/>}