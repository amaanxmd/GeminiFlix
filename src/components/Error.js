import React, { useEffect, useState } from 'react'

const Error = () => {
    const [transition,settransition]=useState(false)
    useEffect(()=>{settransition(true)},[])
  return (
    <div className='h-screen w-full flex items-center justify-center lg:w-2/3  absolute top-0  left-0'>
     <div className='flex flex-col gap-y-1'>
        <div className='flex justify-center'>
            <div className='h-40 w-40 rounded-full border-black border-8 relative bg-white'>
               <div className='h-1/3 w-1/3 absolute rounded-full left-5 top-4 bg-black'></div>
               <div  className='h-1/3 w-1/3 absolute rounded-full right-5 top-4 bg-black'></div>
               <div className={`${transition?"border-t-8":" border-t-2"} h-16 w-16 absolute transition-all duration-1000 border-black rounded-full  -bottom-3 left-1/2 -translate-x-1/2`}></div>
            </div>
        </div>
        <div className='flex justify-center flex-col items-center gap-y-1'>
        <h1 className='text-white text-4xl'>404</h1>
        <h1 className='text-white text-4xl text-center'>Page Not Found</h1>
        <p className='text-white text-lg text-center mt-4'>Couldn't Found In Our Database</p>

        </div>
     </div>

    </div>
  )
}

export default Error