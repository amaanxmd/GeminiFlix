import React from 'react'
import { url } from '../utils/constant'


const ResultsCard = ({moviedata}) => {
  return (
    <div className='text-white flex  gap-x-2 h-[150px] overflow-hidden  bg-black hover:shadow-md hover:shadow-black rounded'>
   <div className=''>{ moviedata.poster_path===null?<div className='w-[100px] h-[150px] bg-gray-700 rounded flex  items-center text-center'>image not found </div>:<div className=' w-[100px]'><img className='w-full h-full rounded' src={url+moviedata.poster_path}/> </div>}</div>   
      <div className='overflow-auto scrollbar-none'>
   <h1 className='text-red-600 font-bold text-lg mb-2'>{moviedata.title}</h1>
   {moviedata.overview===''?<p>overview not available</p>:<p className='text-sm pb-2'>{moviedata.overview}</p> }
    </div>
  
   
    </div>
  )
}

export default ResultsCard