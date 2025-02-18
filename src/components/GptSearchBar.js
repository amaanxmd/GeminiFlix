import React, { useRef, useState, } from 'react';
import { gemini } from '../utils/gemini';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglegpt,updatestartandend,setquery, deletequery, } from '../utils/gptslice';
import { removefetchedquery } from '../utils/fetchedmoviefromqueryslice';
import { removeUpcomingMovies } from '../utils/movieslice';

const GptSearchBar = () => {
  const dispatch =useDispatch()
  
  
  const navigate = useNavigate()
  const query = useRef(null)
  const [queryexist,setqueryexist]=useState(true)

  const [loading,setloading]=useState(false)
  const [loadingMessage,setloadingMessage]=useState("Connecting to Gemini")
  
 

  
  async function handleSearch(){
     
   if(query.current.value.trim() !==''){ 
    setloading(!loading)
    await gemini(query.current.value,dispatch,setquery,setloadingMessage)
    
    
     dispatch(togglegpt())
     
    //  dispatch(removefetchedquery())
     dispatch(updatestartandend({start:0,end:10}))
    //  dispatch(deletequery())
    //  sessionStorage.removeItem('results');
    //  dispatch(removeUpcomingMovies())
     navigate('/searchresults')
     if(!queryexist){
    setqueryexist(true)
     }
  

  }
  else{
    setqueryexist(false)
  }
  }
  return (
    
    <div className='fixed top-1/2 left-1/2 px-2 sm:px-10 py-10 flex sm:gap-y-4 items-center  sm:justify-between flex-col -translate-x-1/2 -translate-y-1/2  text-white bg-black/70 w-5/6 sm:w-1/2 md:w-1/2 lg:w-1/3 z-30'>
      <div className='flex flex-col sm:flex-row items-center   gap-3'>
        <input ref={query} className='w-full bg-inherit border border-gray-500/80 py-[3px] rounded px-4 caret-white text-white ' placeholder='Ex: Shahrukh Khan Movies' />
        <button disabled={loading} className={`bg-red-600 shrink-0  rounded-md py-1 flex items-center gap-x-2     px-2 hover:bg-red-600/80`} onClick={handleSearch}>
        {loading&&<div className='relative shrink-0 h-3 w-3 animate-spin '>
        <div className='h-full w-full  rounded-full border-2 border-white '>
        </div>
          <div className='h-full absolute top-0 w-full  border-2 border-t-neutral-800 rounded-full'></div>

        </div>}
         {loading?loadingMessage:"search"}
        </button>

      </div>
    { !queryexist && <p className='text-red-700  '>Enter your Query</p>}
     <p className='text-xs font-light sm:mt-0 mt-4'>*results are shown using google gemini which may generate wrong results</p>
    </div>
  )
}

export default GptSearchBar