import React from 'react'
import { url } from '../utils/constant'

const Listitem = ({posterPath}) => {
  return (
    <div className='relative  '>
    <img className=' hover:scale-0 rounded sm:hover:scale-125  transition-transform duration-300 h-full w-full' src={url+posterPath}/>
    </div>
  )
}

export default Listitem