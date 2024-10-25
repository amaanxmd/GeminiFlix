import React from 'react'
import { url } from '../utils/constant'

const Listitem = ({posterPath}) => {
  return (
    <div className='relative'>
    <img className='rounded hover:scale-125  transition-transform duration-300' src={url+posterPath}/>
    </div>
  )
}

export default Listitem