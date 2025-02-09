import React from 'react'
import { useState } from 'react'
import { url } from '../utils/constant'

const Listitem = ({posterPath}) => {
  const [hover,sethover]=useState(false)
  return (
     <div className='snap-start' onMouseOut={()=>sethover(false)} onMouseOver={()=>sethover(true)}>

    <div className={ `h-full rounded  transition-all duration-300  ${hover?" sm:absolute sm:hover:scale-110  md:hover:scale-125 lg:hover:scale-125  ":""}`}>
    <img className='rounded h-full w-full' src={url+posterPath}/>
    </div>
     </div> 


      
  )
}

export default Listitem