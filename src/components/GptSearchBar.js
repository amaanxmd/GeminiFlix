import React, { useRef, useState } from 'react';
import { gemini } from '../utils/gemini';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglegpt,updatestartandend,setquery, deletequery } from '../utils/gptslice';
import { removefetchedquery } from '../utils/fetchedmoviefromqueryslice';
import { removeUpcomingMovies } from '../utils/movieslice';

const GptSearchBar = () => {
  const dispatch =useDispatch()
  
  const navigate = useNavigate()
  const query = useRef(null)
  const [queryexist,setqueryexist]=useState(true)
  


  
  function handleSearch(){

   if(query.current.value.trim() !==''){ 
     gemini(query.current.value,dispatch,setquery)
     dispatch(togglegpt())
     dispatch(removefetchedquery())
     dispatch(updatestartandend({start:0,end:10}))
     dispatch(deletequery())
     sessionStorage.removeItem('results');
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
    
    <div className='fixed top-1/2 left-1/2 px-10 pt-[72px] pb-2 flex justify-between flex-col -translate-x-1/2 -translate-y-1/2  text-white bg-black/70 h-44 w-1/3 z-30'>
      <div className='flex   gap-3'>
        <input ref={query} className='w-full bg-inherit border border-gray-500/80 py-[3px] rounded px-4 caret-white text-white ' placeholder='Ex: Shahrukh Movies' />
        <button  className='bg-red-600  rounded-md py-1  px-2 hover:bg-red-600/80' onClick={handleSearch}>
         search
        </button>

      </div>
    { !queryexist && <p className='text-red-700 absolute top-28 left-1/2 -translate-x-1/2 '>Enter your Query</p>}
     <p className='text-xs'>*results are shown using google gemini which may generate wrong result</p>
    </div>
  )
}

export default GptSearchBar