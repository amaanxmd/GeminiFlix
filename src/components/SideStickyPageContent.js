import React from 'react'
import { url } from '../utils/constant'

const SideStickyPageContent = ({upcoming}) => {
  return (
    <div className='flex gap-2 h-[122px] ' >
        <div className=' w-[100px] h-full'><img src={url+upcoming.poster_path}/></div>
        <div className='w-full h-[108px] scrollbar-none overflow-auto'>
        <div className='text-red-600 font-bold text-base mb-1'>{upcoming.title}</div>
        <p className=' text-sm  font-normal text-white '>{upcoming.overview}</p>
        </div>
    </div>
  )
}

export default SideStickyPageContent